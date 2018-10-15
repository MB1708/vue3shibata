<!--
小窓
小さい地図
-->
<template>
  <window-wrapper switchKey='miniMap'>
    <img
      id='minimap__image'
      src='@/assets/ghost/ikea.png'
      alt=''
    />
    <p id='minimap__title'>
      ミニマップ
    </p>
    <div id='minimap__wrapper'>
      <areas-icons
        v-for='(area, i) in saveData.areas'
        :key='i'
        :isVisible='area'
      />
      <current-mini-location/>
    </div>
  </window-wrapper>
</template>

<script>
import WindowWrapper from './WindowWrapper'
import AreasIcons from '../game/AreasIcons'
import CurrentMiniLocation from './CurrentMiniLocation'
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'minimapWindow',
  components: {
    WindowWrapper,
    AreasIcons,
    CurrentMiniLocation,
  },
  computed: {
    ...mapState([
      'aboutWindow',
      'saveData'
    ])
  },
}
</script>

<style scoped>
#minimap__image{
  width: 50vmin;
  max-width: 300px;
  height: 50vmin;
  max-height: 300px;
  margin-bottom: -15vmin;
}
#minimap__title{
  width: 50vmin;
  max-width: 300px;
  text-align: center;
  padding: 1% 3%;
  margin: 0;
  font-weight: bold;
  box-sizing: border-box;
  display: block;
  background-color: var(--color-darkblue);
  border-radius: var(--radius);
}
#minimap__wrapper{
  width: 80vmin;
  height: 80vmin;
  margin: 0;
  overflow: hidden;
  background-color: var(--color-darkblue);
  border-radius: var(--radius);
  position: relative;
  background-image: url('../../assets/bg_map_small.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>