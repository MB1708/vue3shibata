<template>
  <transition name='window__transition'>
    <div
      class='window__wrapper'
      v-show='aboutWindow.toggleMiniMap[switchKey]'
      @click='switchKey === "shaking" || toggleMiniMap(switchKey)'
    >
      <slot/>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'CautionWindow', 
  props: [
    'switchKey'
  ],
  computed: {
    ...mapState([
      'aboutWindow'
    ])
  },
  methods:{
    ...mapMutations([
      'toggleMiniMap'
    ])
  }
}
</script>

<style scoped>
.window__wrapper{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.35);
  z-index: 999;
}
.window__transition-enter-active,
.window__transition-leave-active {
  transition: opacity var(--duration), transform var(--duration);
}
.window__transition-enter,
.window__transition-leave-to{
  opacity: 0;
  transform: translateY(20px);
}
</style>