export default {
  /**
   * クーポンの個人を見分けるユニークナンバーの登録
   */
  registarSavedata: state => {
    //既に一意のキーがvuexにある
    if(state.saveData.uniqueNum){
      return
    }

    state.saveData.uniqueNum = ~~(Math.random() * 8999 + 1000)
  },
  /**
   * セーブデータの初期化
   */
  removeSavedata: state => {
    if(window.confirm('このボタンは記録リセットのテスト用ボタンです。記録をリセットしますか?')){
      localStorage.removeItem('279saveData')
      state.saveData = {
        uniqueNum: 0,
        ghosts: Array(14).fill(false),
        dangers: Array(8).fill(false),
        areas: Array(64).fill(false),
      }
    }
  },

}


