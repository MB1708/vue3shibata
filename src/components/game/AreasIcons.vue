<template>
  <span
    class='areas'
    :style='styles'
  >
  _
  </span>
</template>

<script>
  import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: 'AreaIcons',
    props: {
      isVisible: Boolean,
    },
    computed: {
      styles(){
        return{
          visibility: this.isVisible ? 'hidden': 'visible'
        }
      }
    },
  }
</script>

<style scoped>
.areas{
  width: calc(100% / 8);
  height: calc(100% / 8);
  color: transparent;
  display: inline-block;
  background-color: rgba(0,0,0,.35);
  pointer-events: none;
  margin: 0;
  padding: 0;
  transition-duration: var(--duraion);
  transition-property: visibility;
}
</style>