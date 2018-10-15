<template>
  <div class='card'>
    <div class='card__bg'/>
    <img
      class='card__img'
      :src='[
        isCleared
        ? point.src
        : point.type === "ghosts"
            ? require("../../../assets/menu/fire_ball.svg")
            : require("../../../assets/menu/illustration_enter.svg")
      ]'
      alt=''
    />
    <div class='card__underline'/>
    <div
      class='card__message'
      v-if='true'
    >
      <h3>
        {{
          isCleared
          ? point.name
          : '???'
        }}
      </h3>
      <span>
        {{
          isCleared
          ? point.alignedDescription.description
          : point.type === "ghosts"
            ? 'しばたちょうをたんけんして、ようかいをあつめよう!'
            : 'しばたちょうをたんけんして、おふだをあつめよう!'
        }}
      </span>
      <span>
        {{point.alignedDescription.space}}
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'IllustraionWrapper',
  computed: {
    ...mapState([
      'aboutWindow',
    ]),
  },
  props: {
    point: Object,
    isCleared: Boolean,
  },
}
</script>

<style scoped>
.card{
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
  .card__bg{
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
  .card__img{
    width: 100px;
    height: 100px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: -60px;
    object-fit: contain;
  }
  .card__underline{
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
  .card__message{
    line-height: 200%;
    padding: 0 20px;
  }
</style>