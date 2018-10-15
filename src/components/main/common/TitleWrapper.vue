<template>
  <h2
    class='title'
    v-pre
  >
    <img
      class='title__img'
      src='@/assets/shibataLogoWhite.svg'
      alt=''
    />
    <div class='title__p'>
      <slot/>
    </div>
  </h2>
</template>


<script>
export default {
  name: 'TitleWrapper',
}
</script>

<style scoped>
.title{
  width: 100%;
  height: 120px;
  margin: 45px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-darkblue);
  border-radius: var(--radius);
}
.title__img{
  width: auto;
  height: 70px;
}
.title__p{
  width: 100%;
  height: 30px;
  line-height: 40px;
  font-size: 1.2rem;
}
</style>
