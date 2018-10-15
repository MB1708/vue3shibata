<!--
小窓
警告
-->
<template>
  <window-wrapper switchKey='caution'>
    <img
      id='caution__image'
      src='@/assets/ghost/bone.png'
      alt=''
    />
    <p id='caution__title'>
      {{aboutWindow.aboutCaution.title}}
    </p>
    <p id='caution__message'>
      {{aboutWindow.aboutCaution.message}}
    </p>
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
}
</script>

<style scoped>
#caution__image{
  width: 50vmin;
  max-width: 300px;
  height: 50vmin;
  max-height: 300px;
  margin-bottom: -15vmin;
}
#caution__title{
  width: 50vmin;
  max-width: 300px;
  text-align: center;
  padding: 1% 3%;
  margin: 0;
  font-weight: bold;
  box-sizing: border-box;
  display: block;
  background-color: rgb(50, 166, 56);
  border-radius: var(--radius);
}
#caution__message{
  width: 80vmin;
  max-width: 480px;
  margin: 0;
  overflow: hidden;
  text-align: left;
  padding: 1% 3%;
  box-sizing: border-box;
  border: 3px solid rgb(50, 166, 56);
  border-radius: var(--radius);
}
</style>