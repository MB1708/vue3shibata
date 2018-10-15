import buttons from './buttons'
import sections from './sections'
import ghosts from './ghosts'
import dangers from './dangers'
import buildings from './buildings'
import saveData from './saveData'
import aboutWindow from './aboutWindow'

export default ({
  //上部のボタンに関する
  buttons,
  //送り仮名に関する
  sections,
  //妖怪に関する
  ghosts,
  //危険ポイントに関する
  dangers,
  //建物に関する
  buildings,
  //セーブデータに関する
  saveData,
  //窓の状態に関する
  aboutWindow,
  //その他
  //エリア内の座標
  areaShibata: {
    top: 35.080486,
    bottom: 35.068960,
    left: 136.904629,
    right: 136.918684,
  },
  currentCoords: {
    long: 0,
    lat: 0,
  },
  ua: navigator.userAgent,
})
