<!--
メインの5ページのうちの3つ目
-->
<template>
  <article-wrapper>
    <title-wrapper>たんさくポイント</title-wrapper>
    <section-wrapper
      v-if='!isSP'
      :src='require("../../assets/qr_orange.png")'
    >
    QRコードをよみとって、ゲームをスタート！<br/>
    ※たんけんゲームいがいはパソコンからでもできるよ！
    </section-wrapper>
    <div id='coupon__wrapper'>
      <div
        v-if='isSP'
        class='coupon__btn'
        :class='{"coupon__btn--cleared": calcPoints.sum >= 150}'
        @click='calcPoints.sum >= 150 && toggleMiniMap("coupon"); registarSavedata()'
      >
        {{
          calcPoints.sum &lt; 150
          ? `あと${150 - calcPoints.sum}ポイント`
          : 'クーポンを表示'
        }}
      </div>
      <p id='coupon__description'>
        ポイントがたまったら、279ステーションでスマホを見せて記念品をゲット！
      </p>
      <points-label type='sum'/>
      <points-label type='ghosts'/>
      <points-label type='dangers'/>
      <points-label type='areas'/>
    </div>
  </article-wrapper>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import ArticleWrapper from './common/ArticleWrapper'
import SectionWrapper from './common/SectionWrapper'
import TitleWrapper from './common/TitleWrapper'
import PointsLabel from './PointsLabel'

export default {
  name: 'PointsPage',
  components: {
    ArticleWrapper,
    SectionWrapper,
    TitleWrapper,
    PointsLabel,
  },
  computed: {
    ...mapGetters([
      'calcPoints',
      'isSP',
    ]),
  },
  methods: {
    ...mapMutations([
      'toggleMiniMap',
      'registarSavedata',
    ]),
  }
}
</script>

<style scoped>
#coupon__description{
  width: 100%;
  height: 100px;
}
#coupon__wrapper{
  width: calc(100% - 40px);
  height: 300px;
  padding: 80px 20px 40px;
  margin-bottom: 120px;
  background-color: var(--color-darkblue);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.coupon__btn{
  width: 160px;
  height: 160px;
  line-height: 157.5px;
  font-size: 1.15rem;
  text-align: center;
  box-sizing: border-box;
  color: var(--color-darkblue);
  background-color: gray;
  border: 5px solid var(--color-darkblue);
  border-radius: 50%;
  font-weight: bold;
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  top: -85px;
}
.coupon__btn--cleared{
  color: var(--color-orange);
  background-color: var(--color-darkblue);
  border: 5px solid var(--color-orange);
  cursor: pointer;
}
</style>
