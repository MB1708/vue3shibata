<!--
妖怪のアイコン
-->
<template>
  <img
    :src='[saveData[ghost.type][i] ? ghost.src : ghost.iconsImage]'
    alt=''
    class='ghost'
    :class='{hovering: !saveData[ghost.type][i]}'
    :style='styles'
    @click='toggleMiniMap("description");
    chooseDescription({
      type: ghost.type,
      index: i,
    })'
  />
</template>

<script>
  import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'CurrentLocation',
    props: {
      'ghost': Object,
      'i': Number,
    },
    computed: {
      ...mapState([
        'saveData',
      ]),
      styles(){
        return{
          top: `calc(${this.ghost.top}% - 16px)`,
          left: `calc(${this.ghost.left}% - 16px)`,
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
.ghost{
  width: 24px;
  height: 24px;
  padding: 4px;
  background-color: var(--color-darkblue);
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
}
.hovering{
  -webkit-animation:hovering 0.7s ease-in-out infinite alternate;
  -moz-animation:hovering 0.7s ease-in-out infinite alternate;
  animation:hovering 0.7s ease-in-out infinite alternate;
}
@-webkit-keyframes hovering{
  0% { transform:translateY(-15px); }
100% { transform:translateY(  0px); }
}
@-moz-keyframes hovering{
  0% { transform:translateY(-15px); }
100% { transform:translateY(  0px); }
}
@keyframes hovering{
  0% { transform:translateY(-15px); }
100% { transform:translateY(  0px); }
}
</style>