<template>
  <div
    alt=''
    class='current_location'
    :style='styles'
    v-if='isInThisArea'
  />
</template>

<script>
  import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'CurrentMiniLocation',
    computed: {
      ...mapState([
        'aboutWindow',
      ]),
      ...mapGetters([
        'isInThisArea',
      ]),
      styles(){
        return{
          top: `calc(${this.$store.getters.currentPosition.top}% - 8px)`,
          left: `calc(${this.$store.getters.currentPosition.left}% - 8px)`,
        }
      }
    }
  }
</script>

<style scoped>
.current_location{
  width: 16px;
  height: 16px;
  background-color: var(--color-lightgreen);
  border: 2px solid var(--color-darkblue);
  box-sizing: border-box;
  pointer-events: none;
  position: absolute;
  border-radius: 50%;
  transition-duration: var(--duraion);
  transition-property: top, left;
}
</style>