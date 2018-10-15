<!--
地図全体
-->
<template>
  <div id='gamefield__wrapper'>
    <div id='gamefield'>
      <buildings-icons
        v-for='(building, i) in buildingsPositions'
        :building='building'
        :key='`building_${i}`'
        :i = i
      />
      <current-location-icon/>
      <ghosts-icons
        v-for='(ghost, i) in ghostsPositions'
        :ghost='ghost'
        :key='`ghost_${i}`'
        :i = i
      />
      <dangers-icons
        v-for='(danger, i) in dangersPositions'
        :danger='danger'
        :key='`danger_${i}`'
        :i = i
      />
      <areas-icons
        v-for='(area, i) in saveData.areas'
        :key='i'
        :isVisible='area'
      />
    </div>
  </div>
</template>

<script>
import { mapState,  mapGetters, mapMutations, mapActions } from 'vuex'
import BuildingsIcons from './BuildingsIcons'
import GhostsIcons from './GhostsIcons'
import DangersIcons from './DangersIcons'
import CurrentLocationIcon from './CurrentLocationIcon'
import AreasIcons from './AreasIcons'

export default {
  name: 'GameField',
  components: {
    BuildingsIcons,
    GhostsIcons,
    DangersIcons,
    CurrentLocationIcon,
    AreasIcons,
  },
  computed:{
    ...mapState([
      'saveData'
    ]),
    ...mapGetters([
      'buildingsPositions',
      'ghostsPositions',
      'dangersPositions',
    ]),
  },
  //ゲームをしていないときに背景が動くやつ
  mounted(){
    const map = document.getElementById('gamefield__wrapper')
    map.scrollBy(300, 900)
    let times = 0
    const loopAnimation =()=>{
      if(this.$route.fullPath !== '/maps'){
        map.scrollBy(
          times < 450
          ? 1 
          : times > 600
          && times < 1050
          ? -1
          : 0,
          times < 150
          || times > 900
          ? 1
          : times > 300
          && times < 750
          ? -1
          : 0
        )
        times = times > 1200 ? 0 : times + 1
      }
      requestAnimationFrame(loopAnimation)
    }
    requestAnimationFrame(loopAnimation)
  }
}
</script>

<style scoped>
#gamefield__wrapper{
  width: 100%;
  height: var(--height-main);
  position: absolute;
  left: 0;
  top: var(--height-header);
  overflow: scroll;
}
#gamefield__wrapper::-webkit-scrollbar{
  display: none;
}
#gamefield{
  width: 2048px;
  height: 2048px;
  background-image: url('../../assets/bg_map.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  overflow: hidden;
}
</style>