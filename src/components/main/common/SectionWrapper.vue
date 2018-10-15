<template>
  <section
    class='section'
    v-once
  >
    <div class='section__bg'/>
    <img
      class='section__img'
      :src='src'
      alt=''
    />
    <div class='section__underline'/>
    <p class='section__message'>
      <slot/>
    </p>
  </section>
</template>

<script>
  export default {
    name: 'SectionWrapper',
    props: {
      src: String
    },
  }
</script>

<style scoped>
.section{
  width: 100%;
  padding: 40px 0;
  margin-bottom: 120px;
  position: relative;
  background-color: var(--color-darkblue);
  border-radius: var(--radius);
  text-align: left;
  background-image: url('../../../assets/stars.png');
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-position: calc(100% - 20px) calc(100% - 32px);
}
  .section__bg{
    width: 160px;
    height: 160px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: -80px;
    border-radius: 50%;
    background-color: var(--color-darkblue);
    clip: rect(0, 160px, 90px, 0);
  }
  .section__img{
    width: 100px;
    height: 100px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: -60px;
    object-fit: contain;
  }
  .section__underline{
    width: calc(100% - 40px);
    height: 48px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    border-bottom: dashed white 2px;
    pointer-events: none;
  }
  .section__message{
    line-height: 200%;
    padding: 0 20px;
  }
</style>
