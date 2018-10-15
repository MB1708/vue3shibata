<template>
  <article-wrapper>
    <title-wrapper>しばたアクティブストリート</title-wrapper>
    <section-wrapper
      v-for='(section, i) in sections.home'
      v-if='(isSP && section.isSP) || (!isSP && !section.isSP)'
      :src='section.src'
      :key='i'
    >
      <kana-ruby
        v-if='section.kanas[1]'
        :kanas='section.kanas'
      />
      <p v-else>{{section.kanas}}</p>
    </section-wrapper>
  </article-wrapper>
</template>

<script>
import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'
import ArticleWrapper from './common/ArticleWrapper'
import TitleWrapper from './common/TitleWrapper'
import SectionWrapper from './common/SectionWrapper'
import KanaRuby from './common/KanaRuby'

export default {
  name: 'AboutAppPage',
  components: {
    ArticleWrapper,
    TitleWrapper,
    SectionWrapper,
    KanaRuby,
  },
  computed: {
    ...mapState([
      'sections',
    ]),
    ...mapGetters([
      'isSP'
    ]),
  },
}
</script>
