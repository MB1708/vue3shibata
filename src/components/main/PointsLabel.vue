<template>
  <div class='points__wrapper'>
    <div class='points__label'>
      <img
        :src='src[type]'
        alt='ポイント'
        class='points__img'
      />
      {{jp[type]}}: {{calcPoints[type]}}ポイント
    </div>
    <svg class='points__gauge'>
      <rect
        :width='`${calcPoints[type] / 100 * 99 + 1}%`'
        height='100%'
        :fill='`rgb(${color[type]})`'
      />
    </svg>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import sum from '@/assets/icon/big_castle.svg'
import ghosts from '@/assets/menu/fire_ball.svg'
import dangers from '@/assets/menu/illustration_enter.svg'
import areas from '@/assets/report.svg'
export default {
  name: 'PointsLabel',
  props: {
    type: String,
  },
  computed: {
    ...mapGetters([
      'calcPoints',
    ])
  },
  data(){
    return {
      src: {
        sum,
        ghosts,
        dangers,
        areas,
      },
      jp: {
        sum: 'ごうけい',
        ghosts: 'ようかい',
        dangers: 'おふだ',
        areas: 'たんけん',
      },
      color: {
        sum: '224, 90, 0',
        ghosts: '0, 169, 165',
        dangers: '239, 32, 86',
        areas: '50, 166, 56',
      },
    }
  }
}
</script>

<style scoped>

.points__wrapper{
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.points__label{
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-weight: bold;
}
.points__img{
  width: auto;
  height: 80%;
}
.points__gauge{
  width: 100%;
  height: 10%;
  background-color: white;
}
</style>
