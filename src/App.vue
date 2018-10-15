<!--
大元のコンポーネント  
-->
<template>
  <div id='wrapper'>
    <game-field/>
    <header-component/>
    <main-component/>

    <caution-window/>
    <shaking-window/>
    <description-window/>
    <coupon-window/>
    <mini-map-window/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
//メイン
import HeaderComponent from './components/header/HeaderComponent.vue'
import MainComponent from './components/main/MainComponent.vue'
import GameField from './components/game/GameField.vue'
//小窓
import CautionWindow from './components/miniWindow/CautionWindow'
import ShakingWindow from './components/miniWindow/ShakingWindow'
import DescriptionWindow from './components/miniWindow/DescriptionWindow'
import CouponWindow from './components/miniWindow/CouponWindow'
import MiniMapWindow from './components/miniWindow/MiniMapWindow'

export default {
  name: 'App',
  components:{
//メイン
    HeaderComponent,
    MainComponent,
    GameField,
//小窓
    CautionWindow,
    ShakingWindow,
    DescriptionWindow,
    CouponWindow,
    MiniMapWindow,
  },
}
</script>

<style>/*not scoped due to CSS variable.*/
:root{
  /* width */
  --width-max: 900px;
  /* height */
  --height-header: 60px;
/*  --height-main: calc(100vh - var(--height-header) - var(--height-footer));*/
  --height-main: calc(100vh - var(--height-header));
  --height-footer: 30px;
  /* color */
  --color-white: rgb(255, 255, 255);
  --color-darkblue: rgb(0, 23, 90);
  --color-orange: rgb(224, 90, 0);
  --color-lightgreen: rgb(50, 166, 56);
  /* radius */
  --radius: 5px;
  /* transition */
  --duration: .3s;
}
#wrapper{
  width: 100%;
  height: 100vh;
  color: var(--color-white);
  position: relative;
  font-family: 'Rounded Mplus 1c', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin: 0;
}
</style>
