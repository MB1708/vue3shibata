import ghostsIcon from '@/assets/menu/fire_ball.svg'
import dangersIcon from '@/assets/menu/illustration_enter.svg'

export default ({

  /**
   * クリアに必要なポイント
   */
  clearPoints: () => 20,
  /**
   * デバイスがスマホか否か
   */
  isSP: () => {
    const clu = device => navigator.userAgent.includes(device)
    return clu('iPhone')
      || clu('iPod')
      || clu('iPad')
      || clu('Android')
  },
  /**
   * ポイントの合計を算出する 
   */
  calcPoints: (state, getters) =>
    ({
      sum : ~~(getters.calcTruthy(state.saveData.ghosts) / state.saveData.ghosts.length * 100
      + getters.calcTruthy(state.saveData.dangers) / state.saveData.dangers.length * 100
      + getters.calcTruthy(state.saveData.areas) / state.saveData.areas.length * 100),
      ghosts: ~~(getters.calcTruthy(state.saveData.ghosts) / state.saveData.ghosts.length * 100),
      dangers: ~~(getters.calcTruthy(state.saveData.dangers) / state.saveData.dangers.length * 100),
      areas: ~~(getters.calcTruthy(state.saveData.areas) / state.saveData.areas.length * 100),
    }),
  /**
   * 配列のtrueの数を計算する
   */
  calcTruthy: () =>
    arr =>
      arr.reduce((pre, cur) =>
        cur
        ? pre + 1
        : pre
      ,0),
  /**
   * 現在柴田町にいるか否か
   */
  isInThisArea: state =>
    state.areaShibata.left < state.currentCoords.long
    && state.currentCoords.long < state.areaShibata.right
    && state.areaShibata.bottom < state.currentCoords.lat
    && state.currentCoords.lat < state.areaShibata.top,
  /**
   * 緯度経度をパーセントに変換
   */
  convertCoordsToPositions: state =>
    coords =>
      ({
        left: (100 / (state.areaShibata.right - state.areaShibata.left) * (coords.long - state.areaShibata.left)).toFixed(3),
        top: (100 - 100 / (state.areaShibata.top - state.areaShibata.bottom) * (coords.lat - state.areaShibata.bottom.toFixed(3))),
      }),
  /**
   * 現在の座標
   */
  currentPosition: (state, getters) =>
    ({
    ...getters.convertCoordsToPositions({
        long: state.currentCoords.long,
        lat: state.currentCoords.lat
      })
    }),
  /**
   * 建物の座標
   */
  buildingsPositions: (state, getters) =>
    state.buildings.map(val =>
      ({
        ...val,
        type: 'buildings',
        ...getters.convertCoordsToPositions({
          long: val.long,
          lat: val.lat
        }),
      })
    ),
  /**
   * 妖怪の座標
   */
  ghostsPositions: (state, getters) =>
    state.ghosts.map(val =>
      ({
        ...val,
        type: 'ghosts',
        iconsImage: ghostsIcon,
        url: null,
        ...getters.convertCoordsToPositions({
          long: val.long,
          lat: val.lat
        }),
      })
    ),
  /**
   * 危険箇所の座標
   */
  dangersPositions: (state, getters) =>
    state.dangers.map(val =>
      ({
        ...val,
        type: 'dangers',
        iconsImage: dangersIcon,
        url: null,
        ...getters.convertCoordsToPositions({
          long: val.long,
          lat: val.lat
        }),
      })
    ),

})