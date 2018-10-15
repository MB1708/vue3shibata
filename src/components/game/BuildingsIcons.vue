<!--
建築物のアイコン
-->
<template>
  <img
    :src='building.iconsImage'
    alt=''
    class='building'
    :style='styles'
    @click='toggleMiniMap("description");
    chooseDescription({
      type: building.type,
      index: i,
    })'
  />
</template>

<script>
  import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'CurrentLocation',
    props: {
      'building': Object,
      'i': Number,
    },
    computed: {
      styles(){
        return{
          top: `calc(${this.building.top}% - 16px)`,
          left: `calc(${this.building.left}% - 16px)`,
        }
      }
    },
    methods: {
      ...mapMutations([
        'toggleMiniMap',
        'chooseDescription',
      ]),
    }
  }
</script>

<style scoped>
.building{
  width: 24px;
  height: 24px;
  padding: 4px;
  background-color: var(--color-darkblue);
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
}
</style>