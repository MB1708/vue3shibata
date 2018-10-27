import handleSaveData from './handleSaveData'

export default ({
  ...handleSaveData,
  /**
   * GPS取得中か否かをオンオフする
   */
  toggleConnection: state =>
    state.aboutWindow.isConnected = !state.aboutWindow.isConnected,
  /**
   * ゲームを開始状態にする
   */
  getStartedGame: state =>
    state.aboutWindow.isStartedGame = true,
  /**
   * 小窓の表示/非表示
   * type で種類の指定
   */
  toggleMiniMap: (state, type) =>{
    state.aboutWindow.toggleMiniMap[type] = !state.aboutWindow.toggleMiniMap[type]
  },
    
  /**
   * 注意小窓のメッセージを変更
   */
  updateCaution: (state, {title, message}) => {
    state.aboutWindow.aboutCaution = {title, message}
  },

  /**
   * 説明小窓のメッセージを変更
   */
  chooseDescription: (state, e) => 
    state.aboutWindow.chosenDescription = {
      ...state[e.type][e.index],
      type: e.type,
      url: state[e.type][e.index].url || null,
      isCleared: e.type === 'buildings'
      || state.saveData[e.type][e.index]
    },
  /**
   * n秒に1回発行される
   * ポイントの計算機
   */
  calcCoords: (state, coords) => {
    //柴田の経度
    const widthShibata = state.areaShibata.right - state.areaShibata.left

    //柴田の緯度
    const heightShibata = state.areaShibata.top - state.areaShibata.bottom

    //柴田左端から見た現在地の経度
    const widthNow = coords.longitude - state.areaShibata.left

    //柴田上端から見た現在地の緯度
    const heightNow = state.areaShibata.top - coords.latitude

    //柴田左端から見た現在地の経度(%) view用

    //currentPositionを更新 view用
    state.currentCoords.long = coords.longitude
    state.currentCoords.lat = coords.latitude
    
    //セーブデータを更新
    state.saveData.ghosts = state.ghosts.map((val, ind) =>
      state.saveData.ghosts[ind]
      || (Math.abs(val.lat - coords.latitude) < 0.00015
      && Math.abs(val.long - coords.longitude) < 0.00015)
    )

    state.saveData.dangers = state.dangers.map((val, ind) =>
      state.saveData.dangers[ind]
      || (Math.abs(val.lat - coords.latitude) < 0.00015
      && Math.abs(val.long - coords.longitude) < 0.00015)
    )

    state.saveData.areas = state.saveData.areas.map((val, ind)=>
      val
      ||(
        widthShibata / 8 * ~~(ind % 8) < widthNow
        && widthNow < widthShibata / 8 * ~~(ind % 8 + 1)
        && heightShibata / 8 * (7 - ~~(ind / 8)) < (heightShibata - heightNow)
        && (heightShibata - heightNow) < heightShibata / 8 * (7 - ~~(ind / 8 - 1))
      )
    )
  },

})

//.00015