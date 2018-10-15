
const getLocation = opt =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, opt))

const sleep = ms => new Promise(res => setTimeout(res, ms))

export default ({
  /**
   * 端末がゲームに対応しているかと
   * GPSを許可しているかの確認
   */
  confirmAuthority: ({dispatch, commit, state}, map) => {

    //すでにゲームが始まっているか
    //通信中なら無効
    if(state.aboutWindow.toggleMiniMap.shaking
    || state.aboutWindow.isStartedGame){
      return
    }

    commit('toggleMiniMap', 'shaking')
    //geolocatiom APIが使えない端末を弾く
    if(!navigator.geolocation){
      commit('toggleMiniMap', 'caution')
      commit('updateCaution', {
        title: 'このゲームについて',
        message: 'GPS機能が使えるスマホで遊んでね!',
      })
      commit('toggleMiniMap', 'shaking')
      return
    }

    dispatch('getInitialCoords', map)
  },

  /**
   * 初期位置を計算するための座標取得
   */
  getInitialCoords: async({getters, commit, dispatch}, map) => {
    try {
      await sleep(500)
      const pos = await getLocation({timeout: 5000})
      //mutationを発行
      commit('calcCoords', pos.coords)
      //ループ開始
      dispatch('loopGame')
      //ゲームを開始状態にする
      commit('getStartedGame')
      if(!getters.isInThisArea){
        dispatch('readyToScroll', map)
        commit('toggleMiniMap', 'caution')
        commit('updateCaution', {
          title: "柴田町においで！",
          message: "あそんでくれてありがとう! 柴田町にきて、ゲームに参加してみて!",
        })
      }

    } catch(err) {
      commit('toggleMiniMap', 'caution')
      commit('updateCaution', {
        title: 'せつぞくエラー',
        message: err.code === 1
        ? "位置情報の取得をオンにしてね!"
        : err.code === 2
        ? "電波が不安定です!もう一度おしてね!"
        : err.code === 3
        ? "電波が不安定です!もう一度おしてね!!"
        : `エラーです。(エラーコード:${err.code})`
      })
    } finally {
      commit('toggleMiniMap', 'shaking')
    }
  },
  /**
   * 座標を計算するループ部分 ループしつつmutationを発行
   */
  loopGame: async({commit, dispatch}) => {
    try {
      //座標取得に成功したらmutationを発行
      const newPos = await getLocation({timeout: 5000})
      commit('calcCoords', newPos.coords)

    } catch(err) {

    } finally {
      //ループ
      await sleep(500)
      dispatch('loopGame')
    }
  },
  /**
   * スクロール量の計算
   */
  readyToScroll: ({dispatch, getters}, map) => {
    //ゲーム画面の大きさ
    const screenWidth = map.clientWidth
    const screenHeight = map.clientHeight
    //今見えている画面の左と上が左上端からそれぞれ何pxか
    const seenPositionXLeftEnd = map.scrollLeft
    const seenPositionYTopEnd = map.scrollTop
    //今見えている画面の中心が左上端からそれぞれ何pxか
    const seenPositionX = seenPositionXLeftEnd + screenWidth / 2
    const seenPositionY = seenPositionYTopEnd + screenHeight / 2
    //現在地が表示されているアイコンが左上端からそれぞれ何pxか
    const currentPositionX = 2048 / 100 * getters.currentPosition.left - 16
    const currentPositionY = 2048 / 100 * getters.currentPosition.top - 16
    //scrollbyでどちらにループするか
    const shouldScrollToRight = ~~(currentPositionX - seenPositionX)
    const shouldScrollToBottom = ~~(currentPositionY - seenPositionY)
    //スクロールのループ開始
    dispatch('loopScroll', {
      x: shouldScrollToRight,
      y: shouldScrollToBottom,
      map
    })
  },

  /**
   * スクロールのループ
   */
  loopScroll: ({}, coord) => {
    let times = 0
    const fps = 50
    const move = (one, two) => {
      coord.map.scrollBy(
        coord.x / fps,
        coord.y / fps,
      )
      times++
      times < fps
      ? requestAnimationFrame(move)
      : cancelAnimationFrame(move)
    }
    requestAnimationFrame(move)
  }
})