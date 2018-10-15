<template>
  <img
    :src='[saveData[danger.type][i] ? danger.src : danger.iconsImage]'
    alt=''
    class='danger'
    :class='{scaling: !saveData[danger.type][i]}'
    :style='styles'
    @click='toggleMiniMap("description");
    chooseDescription({
      type: danger.type,
      index: i,
    })'
  />
</template>

<script>
  import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'CurrentLocation',
    props: {
      'danger': Object,
      'i': Number,
    },
    computed: {
      ...mapState([
        'saveData',
      ]),
      styles(){
        return{
          top: `calc(${this.danger.top}% - 16px)`,
          left: `calc(${this.danger.left}% - 16px)`,
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
.danger{
  width: 24px;
  height: 24px;
  padding: 4px;
  background-color: var(--color-darkblue);
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
}
.scaling{
  -webkit-animation:scaling 0.7s ease-in-out infinite alternate;
  -moz-animation:scaling 0.7s ease-in-out infinite alternate;
  animation:scaling 0.7s ease-in-out infinite alternate;
}
@-webkit-keyframes scaling{
  0% { transform: scale(1.2, 1.2); }
100% { transform: scale(0.8, 0.8); }
}
@-moz-keyframes scaling{
  0% { transform: scale(1.2, 1.2); }
100% { transform: scale(0.8, 0.8); }
}
@keyframes scaling{
  0% { transform: scale(1.2, 1.2); }
100% { transform: scale(0.8, 0.8); }
}
</style>
