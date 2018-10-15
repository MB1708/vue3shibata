<template>
  <window-wrapper switchKey='description'>
    <div id='description__wrapper'>
      <img
        :src='[
          aboutWindow.chosenDescription.isCleared
          ? aboutWindow.chosenDescription.src
          : aboutWindow.chosenDescription.type === "ghosts"
            ? require("../../assets/menu/fire_ball.svg")
            : require("../../assets/menu/illustration_enter.svg")
        ]'
        alt=''
        id='description__image'
        :style='styles'
      />
      <a
        class='description__title'
        v-if='aboutWindow.chosenDescription.url'
        :href='aboutWindow.chosenDescription.url'
      >
        <span class='description__span'>
          <img
            src='../../assets/link_chain.png'
            alt='リンク'
            class='title__link'
          />
        </span>
        {{
          aboutWindow.chosenDescription.isCleared
          ? aboutWindow.chosenDescription.name
          : '???'
        }}
      </a>
      <div
        class='description__title'
        v-else
      >
        {{
          aboutWindow.chosenDescription.isCleared
          ? aboutWindow.chosenDescription.name
          : '???'
        }}
      </div>

      <div id='description__main'>
        {{
          aboutWindow.chosenDescription.isCleared
          ? aboutWindow.chosenDescription.description
          : aboutWindow.chosenDescription.type === 'ghosts'
            ? 'どんなようかいなのかな? このばしょまで行ってみよう!'
            : 'もしものときのために... スマホをみすぎずまわりにちゅういして、かくにんしてみよう。'
        }}
      </div>

      <div
        id='description__author'
        v-if='aboutWindow.chosenDescription.isCleared'
      >
        <span class='description__span'>
          <img
            src='../../assets/author.png'
            alt='リンク'
            class='author__link'
          />
        </span>
        {{aboutWindow.chosenDescription.author}}
      </div>
    </div>
  </window-wrapper>
</template>

<script>
import WindowWrapper from './WindowWrapper'
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'CautionWindow',
  computed: {
    ...mapState([
      'aboutWindow',
    ]),
    styles(){
      return {
        backgroundColor: this.$store.state.aboutWindow.chosenDescription.type === "buildings"
        ? 'rgba(0, 0, 0, .7)'
        : 'unset'
      }
    }
  },
  components: {
    WindowWrapper
  },
}
</script>

<style scoped>
#description__wrapper{
  width: 80vmin;
  max-width: 480px;
  height: 80vmin;
  max-height: 480px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: var(--radius);
}
#description__image{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  border-radius: var(--radius);
}
.description__title{
  height: 10%;
  color: white;
  align-self: flex-start;
  font-size: 1.5rem;
  margin-left: 2.5%;
  padding: 2px 4px;
  text-align: left;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  align-items: center;
}
.description__span{
  height: 100%;
  margin: 0 3px;
  display: flex;
  align-items: center;
}
.title__link{
  width: auto;
  height: 50%;
}
#description__main{
  width: calc(95% - 8px);
  margin: 1.5% 0;
  padding: 2px 4px;
  background-color: rgba(0, 0, 0, .7);
}
#description__author{
  height: 5%;
  align-self: flex-end;
  background-color: rgba(0, 0, 0, .7);
  margin: 0 2.5% 1.5%;
  padding: 2px 4px;
  display: flex;
  align-items: center;
}
.author__link{
  width: auto;
  height: 80%;
}
</style>