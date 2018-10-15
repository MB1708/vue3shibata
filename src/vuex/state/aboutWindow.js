export default {
  //ゲームが始まっているか
  isStartedGame: false,
  //小窓の開閉状況
  toggleMiniMap: {
    caution: false,// 注意!
    shaking: false,// === gps取得中
    description: false,
    coupon: false,
    miniMap: false,
  },
  //注意小窓のメッセージ
  aboutCaution: {
    title: '',
    message: '',
  },
  //説明小窓に表示するコンポーネント
  chosenDescription: {
    name: '',
    url: null,
    description: '',
    iconsImage: '',
    src: '',
    author: '',
    lat: 35.0754,
    long: 136.9062,
    isCleared: false,
  },
}