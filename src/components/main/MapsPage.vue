<!--
メインの5ページのうちの2つ目
-->
<template>
  <div id='operation__wrapper'>
    <div class='operation__board' :class='{"operation__board--hidden": !isSP}'>
    <section-wrapper
      v-if='!isSP'
      :src='require("../../assets/qr_blue.png")'
    >
    QRコードをよみとって、ゲームをスタート！<br/>
    ※たんけんゲームいがいはパソコンからでもできるよ！
    </section-wrapper>
      <div
        v-if='!aboutWindow.isStartedGame && !aboutWindow.toggleMiniMap.shaking && isSP'
        id='btn__start'
        @click='readyToConfirm()'
      >
        ゲームをはじめる
      </div>
      <img
        class='btn__started'
        v-if='aboutWindow.isStartedGame'
        src='../../assets/report.svg'
        alt='ミニマップ'
        @click='toggleMiniMap("miniMap")'
      />
      <img
        class='btn__started'
        v-if='aboutWindow.isStartedGame && isInThisArea'
        src='../../assets/icon/current_location.svg'
        alt='現在地'
        @click='readyToScroll()'
      />
      <img
        class='btn__started'
        v-if='aboutWindow.isStartedGame && !isInThisArea'
        src='../../assets/antenna.svg'
        alt='メッセージ'
        @click='toggleMiniMap("caution");
        updateCaution({
          title: "柴田町においで！",
          message: "あそんでくれてありがとう! 柴田町にきて、ゲームに参加してみて!",
        })'
      />
    </div>
  </div>
</template>


<script>
import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'
import ArticleWrapper from './common/ArticleWrapper'
import SectionWrapper from './common/SectionWrapper'
import TitleWrapper from './common/TitleWrapper'

export default {
  name: 'MapsPage',
  components: {
    ArticleWrapper,
    SectionWrapper,
    TitleWrapper,
  },
  computed:{
    ...mapState([
      'aboutWindow',
    ]),
    ...mapGetters([
      'isSP',
      'isInThisArea',
    ]),
  },
  methods: {
    ...mapMutations([
      'toggleMiniMap',
      'updateCaution',
      'scrollToCurrentPosition'
    ]),
    readyToConfirm(){
      this.$store.dispatch(
        'confirmAuthority',
        document.getElementById('gamefield__wrapper'),
      )
    },
    readyToScroll(){
      this.$store.dispatch(
        'readyToScroll',
        document.getElementById('gamefield__wrapper'),
      ) 
    },
  },
}
</script>

<style scoped>
#operation__wrapper{
  width: 100%;
  height: 40px;
  margin-top: calc(var(--height-main) - 40px - 40px);
  z-index: 1;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
}
.operation__board{
  width: calc(100% - 40px);
  height: 100%;
  max-width: var(--width-max);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
}
.operation__board--hidden{
  margin-top: calc(var(--height-main) - 901px);
  flex-direction: column;
}
#btn__start{
  width: 100%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  background-color: var(--color-darkblue);
  border-radius: var(--radius);
  cursor: pointer;
}
.btn__started{
  width: 28px;
  height: 28px;
  padding: 6px;
  margin-left: 8px;
  background-color: var(--color-darkblue);
  border-radius: 50%;
  cursor: pointer;
}
</style>