<template>
  <header
    id='header'
    :style='styles.header'
  >
    <header-button
      v-for='(button, i) in buttons'
      :key='i'
      :button='button'
      :i='i'
    />
    <div
      id='arrow'
      :style='styles.arrow'
    />
  </header>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import HeaderButton from './HeaderButton.vue'

export default {
  name: 'HeaderComponent',
  components:{
    HeaderButton,
  },
  computed: {
    ...mapState([
      'buttons',
      'points',
    ]),
    chosenNum(){
      return this.$store.state.buttons.reduce((pre, cur, ind) =>
        cur.path === this.$route.fullPath
        ? ind
        : pre
      ,null)
    },
    styles(){
      return {
        header: {
          borderBottom: `4px solid rgb(${this.$store.state.buttons[this.chosenNum].color})`,
        },
        arrow: {
          borderColor: `transparent transparent rgb(${this.$store.state.buttons[this.chosenNum].color}) transparent`,
          left: `calc(${20 * this.chosenNum + 10}% - 11px)`,
        }
      }
    }
  },
}
</script>

<style scoped>
#header{
  width: 100%;
  height: var(--height-header);
  background-color: var(--color-darkblue);
  box-sizing: border-box;
  display: flex;
  position: relative;
  transition-duration: var(--duration);
  transition-property: border-bottom;
}
#arrow{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 11px 12px 11px;
  position: absolute;
  bottom: -3px;
  transition-duration: var(--duration);
  transition-property: left, border-color;
}
</style>
