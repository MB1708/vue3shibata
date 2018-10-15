<template>
  <article-wrapper>
    <title-wrapper>アクティブストリートのなかまたち</title-wrapper>
    <section-wrapper
      v-for='(section, i) in sections.members'
      :src='section.src'
      :key='i'
    >
      <p>{{section.mes}}</p>
      <a
        class='members__link'
        href='https://www.daido-it.ac.jp/'
        v-if='i === 0'>
        <img
          class='link__img'
          src='../../assets/link_chain.png'
          alt='大同大学'
        />
          大同大学
      </a>
      <a
        class='members__link'
        href='http://279.nagoya/'
        v-if='i === 0'>
        <img
          class='link__img'
          src='../../assets/link_chain.png'
          alt='279ステーション'
        />
          柴田商店街 279ステーション
      </a>
      <a
        class='members__link'
        href='http://www.city.nagoya.jp/shiminkeizai/page/0000081252.html'
        v-if='i === 1'>
        <img
          class='link__img'
          src='../../assets/link_chain.png'
          alt='名古屋市商店街賑わい創出事業'
        />
          名古屋市: 商店街にぎわい創出事業
      </a>
    </section-wrapper>
    <students-list/>
    <div @click='removeSavedata' :style='{height: "20px", width: "10%"}'/><!-- test -->
  </article-wrapper>
</template>

<script>
import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'
import ArticleWrapper from './common/ArticleWrapper'
import StudentsList from './StudentsList.vue'
import IllustrationWrapper from './common/IllustrationWrapper.vue'
import TitleWrapper from './common/TitleWrapper'
import SectionWrapper from './common/SectionWrapper'

export default {
  name: 'AboutMembersPage',
  components: {
    ArticleWrapper,
    IllustrationWrapper,
    StudentsList,
    TitleWrapper,
    SectionWrapper,
  },
  computed: {
    ...mapState([
      'sections',
    ]),
  },
  methods: {//test
    ...mapMutations([
      'removeSavedata',
    ])
  }
}
</script>

<style scoped>
.members__link{
  color: white;
  display: block;
}
.link__img{
  width: auto;
  height: 18px;
}
</style>
