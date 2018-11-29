<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
        title: '三峡人家',
        desc: '三峡风光，巴风楚韵，美景等你哦'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/84/96e0a5830d7c99.jpg_r_640x214_ee164725.jpg',
        title: '江城之秋',
        desc: '最动听的秋日私语，与你携手看尽金秋盛景'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  .recommend-title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    .item-img{
      width: 100%;
    }
  }
  .item-info{
    padding: .1rem;
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
    }
    .item-desc{
      line-height: .4rem;
      color: #ccc;
      font-size: .25rem;
      @include ellipsis;
    }
  }
</style>