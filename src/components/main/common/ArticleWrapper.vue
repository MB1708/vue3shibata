<!--
全ての記事をラップするやつ
-->
<template>
    <transition name='wrapper__trantision'>
      <article class='article__wrapper'>
        <div class='article'>
          <slot/>
        </div>
        <footer-component/>
      </article>
    </transition>
</template>

<script>
import FooterComponent from '../../footer/FooterComponent.vue'
export default {
  name: 'ArticleWrapper',
  components: {
    FooterComponent
  }
}
</script>

<style scoped>
.article__wrapper{
  width: 100%;
  min-height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background-color: rgba(0,0,0,.15);
  z-index: 1;
  position: relative;
}
.article{
  width: calc(100% - 40px);
  overflow: hidden;
  max-width: var(--width-max);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.wrapper__trantision-enter-active,
.wrapper__trantision-leave-active {
  transition: opacity var(--duration);
}
.wrapper__trantision-enter,
.wrapper__trantision-leave-to{
  opacity: 0;
}
</style>