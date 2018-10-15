<!--
フッター
-->
<template>
  <footer
    id='footer'
    v-pre
  >
    &copy; 2017 Shibata Active Street Project
  </footer>
</template>



<style scoped>
  #footer{
    width: 100%;
    height: var(--height-footer);
    line-height: var(--height-footer);
    background-color: var(--color-darkblue);
    text-align: center;
    font-size: 0.8rem;
  }
</style>
<script>
  export default {
    name: 'FooterComponent',
  }
</script>