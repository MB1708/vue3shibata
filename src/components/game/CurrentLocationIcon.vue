<!--
現在地のアイコン
-->
<template>
  <img
    src='../../assets/icon/current_location.svg'
    alt=''
    id='currentlocation'
    :style='styles'
    v-if='aboutWindow.isStartedGame && isInThisArea'
  />
</template>

<script>
  import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'CurrentLocation',
    computed: {
      ...mapState([
        'aboutWindow',
      ]),
      ...mapGetters([
        'isInThisArea',
      ]),
      styles(){
        return{
          top: `calc(${this.$store.getters.currentPosition.top}% - 12px)`,
          left: `calc(${this.$store.getters.currentPosition.left}% - 12px)`,
        }
      }
    },
  }
</script>

<style scoped>
#currentlocation{
  width: 24px;
  height: 24px;
  padding: 4px;
  background-color: var(--color-darkblue);
  pointer-events: none;
  position: absolute;
  border-radius: 50%;
  transition-duration: var(--duraion);
  transition-property: top, left;
  z-index: 21;
}
</style>