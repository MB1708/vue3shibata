<!--
小窓
クーポン
-->
<template>
  <window-wrapper switchKey='coupon'>
    <div id='unique__wrapper'>
      <div id='unique'>
      <img
        src='../../assets/shibata_logo_orange.svg'
        alt='クーポン'
        v-if='calcPoints.sum >= clearPoints'
        id='coupon__window'
      />
        <div class='mes'>かくとくポイント: {{calcPoints.sum}}</div>
        <div class='mes small'>たんけんID: {{saveData.uniqueNum}}</div>
      </div>
    </div>
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
      'calcPoints',
      'clearPoints',
    ]),
  },
  components: {
    WindowWrapper
  },
}
</script>

<style scoped>
#unique__wrapper{
  width: 93vmin;
  height: 93vmin ;
  border-radius: var(--radius);
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
#unique{
  width: 90%;
  height: 90%;
  position: relative;
  text-align: center;
  color: var(--color-orange);
  border-radius: var(--radius);
  border: 1vmin dashed var(--color-orange);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;
}
#coupon__window{
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: var(--radius);
}
.mes{
  width: 100%;
  height: 10%;
  text-align: center;
  font-size: 150%;
  font-weight: bold;
}
.small{
  font-size: 100%;
}
</style>