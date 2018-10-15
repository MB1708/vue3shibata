<!--
小窓
ロード中のアニメーション
-->
<template>
  <window-wrapper switchKey='shaking'>
    <img
      id='shaking__image'
      src='@/assets/loading_theme.png'
      alt=''
    />
  </window-wrapper>
</template>

<script>
import WindowWrapper from './WindowWrapper'
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'CautionWindow',
  computed: {
    ...mapState([
      'aboutWindow'
    ])
  },
  components: {
    WindowWrapper
  },
  methods:{
    ...mapMutations([
      'toggleMiniMap'
    ])
  }
}
</script>

<style scoped>
#shaking__image{
  width: 96px;
  height: 96px;
  -webkit-animation: spin 3.5s linear infinite;
  -moz-animation: spin 3.5s linear infinite;
  -ms-animation: spin 3.5s linear infinite;
  -o-animation: spin 3.5s linear infinite;
  animation: spin 3.5s linear infinite;
}
@-webkit-keyframes spin {
0% {-webkit-transform: rotate(0deg);}
100% {-webkit-transform: rotate(360deg);}
}
@-moz-keyframes spin {
0% {-moz-transform: rotate(0deg);}
100% {-moz-transform: rotate(360deg);}
}
@-ms-keyframes spin {
0% {-ms-transform: rotate(0deg);}
100% {-ms-transform: rotate(360deg);}
}
@-o-keyframes spin {
0% {-o-transform: rotate(0deg);}
100% {-o-transform: rotate(360deg);}
}
@keyframes spin {
0% {transform: rotate(0deg);}
100% {transform: rotate(360deg);}
}
</style>