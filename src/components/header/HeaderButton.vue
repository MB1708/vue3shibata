<!--
ヘッダーのボタン
押すと各々のページに飛ぶ
-->
<template>
  <router-link
    class='wrapper__button'
    :to='button.path'
    :style='{color: isChosen ? `rgb(${button.color})` : "inherit"}'
  >
    <img
      class='button__img'
      v-if='button.buttonEnter'
      :src='[isChosen ? button.buttonEnter: button.buttonLeave]'
      alt=''
    />
    <div
      class='button__img'
      v-else
    >
      {{calcPoints.sum}}
    </div>
    <p class='button__text'>
      {{button.text}}
    </p>
  </router-link>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'ButtonComponent',
  props: {
    'button': Object,
    'i': Number,
  },
  computed: {
    ...mapGetters([
      'calcPoints'
    ]),
    isChosen(){
      return this.$props.button.path === this.$route.fullPath
    }
  },
  methods: {
    ...mapMutations([
      'routing'
    ]),
  }
}
</script>

<style scoped>
.wrapper__button{
  width: 20%;
  height: 100%;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition-duration: var(--duration);
  transition-property: color; 
  font-weight: bold;
}
.button__img{
  width: auto;
  height: 50%;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
}
.button__text{
  width: auto;
  height: 25%;
  line-height: 150%;
  text-align: center;
  font-size: 0.8rem;
  margin: 2px 0 0;
  padding: 0;
}
</style>