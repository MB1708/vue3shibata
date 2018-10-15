<!--
メインの5ページが入る場所の確保
-->
<template>
  <main id='main'>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'MainComponent',
}
</script>

<style scoped>
#main{
  width: 100%;
  height: var(--height-main);
  overflow: scroll;
}
#main::-webkit-scrollbar{
  display: none;
}
</style>