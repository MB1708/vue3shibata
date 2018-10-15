<template>
  <window-wrapper switchKey='coupon'>
    <span id='unique'>
      {{saveData.uniqueNum}}
    <img
      src='../../assets/shibata_logo_orange.svg'
      alt='クーポン'
      v-if='calcPoints.sum >= 150'
      id='coupon__window'
    />
    </span>
  </window-wrapper>
</template>

<script>
import WindowWrapper from './WindowWrapper'
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'CautionWindow',
  computed: {
    ...mapState([
      'saveData'
    ]),
    ...mapGetters([
      'calcPoints'
    ]),
  },
  components: {
    WindowWrapper
  },
}
</script>

<style scoped>
#unique{
  width: 93vmin;
  height: 93vmin ;
  line-height: 150vmin;
  position: relative;
  text-align: center;
  font-size: 350%;
  font-weight: bold;
  color: var(--color-orange);
  border-radius: var(--radius);
}
#coupon__window{
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: var(--radius);
}
</style>