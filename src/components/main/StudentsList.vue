<template>
  <div
    class='roster'
    v-pre
  >
    <div class='roster__bg'/>
    <img
      class='roster__img'
      src='../../assets/daido_uni.svg'
      alt=''
    />
    <div class='roster__underline'/>
    <div class='students__wrapper'>
      <h3>プロジェクトメンバー</h3>
      <hr class='hr'/>
      <h4 class='students'>情報学研究科 情報学専攻</h4>
      <div>総合 1年 水谷竜斗</div>
      <hr class='hr'/>
      <h5 class='students'>情報学研究科 情報学専攻</h5>
      <div>イラスト 1年 日比野 晟正</div>
      <h5 class='students'>情報デザイン学科 プロダクトデザイン専攻</h5>
      <div>イラスト 4年 石野 要</div>
      <div>イラスト 4年 小池 朔弘</div>
      <div>イラスト 4年 仙敷 絵理</div>
      <div>イラスト 4年 點東 徳寛</div>
      <div>イラスト 4年 林 このみ</div>
      <div>イラスト 4年 松崎 涼太</div>
      <h5 class='students'>情報デザイン学科 メディアデザイン専攻</h5>
      <div>企画 4年 原田研究室</div>
      <div>撮影 2年 伊藤 健汰</div>
      <h5 class='students'>情報システム学科 情報ネットワーク専攻</h5>
      <div>企画 1年 松波 聡一</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsList',
}
</script>

<style scoped>
.students__wrapper{
  margin: 0 25px;
}
.students{
  margin-top: 40px;
  margin-left: -5px;
}
.hr{
  height: 1px;
  border: none;
  border-bottom: dashed white 2px;
  color: white;
  margin-top: 30px;
}
.roster{
  width: 100%;
  padding: 40px 0;
  margin-bottom: 120px;
  position: relative;
  background-color: var(--color-darkblue);
  border-radius: var(--radius);
  text-align: left;
  background-image: url('../../assets/stars.png');
  background-repeat: no-repeat;
  background-size: 36px 36px;
  background-position: calc(100% - 20px) calc(100% - 32px);
}
  .roster__bg{
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
  .roster__img{
    width: 100px;
    height: 100px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: -60px;
    object-fit: contain;
  }
  .roster__underline{
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
</style>
