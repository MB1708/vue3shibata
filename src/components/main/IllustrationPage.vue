<template>
  <article-wrapper>
    <title-wrapper>ようかい・おふだずかん</title-wrapper>
    <section-wrapper
      v-if='!isSP'
      :src='require("../../assets/qr_red.png")'
    >
    QRコードをよみとって、ゲームをスタート！<br/>
    ※たんけんゲームいがいはパソコンからでもできるよ！
    </section-wrapper>
    <div
      v-for='(checkPoint, i) in alignCheckPoints'
      :key='i'
      class='cards__wrapper'
    >
      <div class='card__wrapper'>
        <illustration-wrapper
          :point='checkPoint.ghost'
          :isClear='saveData.ghosts[i]'
        />
      </div>
      <div class='card__wrapper'>
        <illustration-wrapper
          :point='checkPoint.danger'
          :isCleared='saveData.dangers[i]'
        />
      </div>
    </div>
  </article-wrapper>
</template>

<script>
import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'
import ArticleWrapper from './common/ArticleWrapper'
import SectionWrapper from './common/SectionWrapper'
import IllustrationWrapper from './common/IllustrationWrapper.vue'
import TitleWrapper from './common/TitleWrapper'

export default {
  name: 'IllustrationPage',
  components: {
    ArticleWrapper,
    SectionWrapper,
    IllustrationWrapper,
    TitleWrapper
  },
  computed: {
    ...mapGetters([
      'alignCheckPoints',
      'isSP',
    ]),
    ...mapState([
      'saveData',
    ])
  },
}
</script>

<style scoped>
.cards__wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: top;
}
.card__wrapper{
  width: 100%;
  max-width: 430px;
  margin: 0 10px;
}
</style>