<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/2d/0d7dc3400a50b502.jpg_750x200_4ca95dd4.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
      }]
    }
  }
}
</script>

<style>
  .swiper-pagination-bullet-active {
    background:#fff !important;
  }
</style>


<style lang="scss" scoped>
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.66%;
    background: #eee;
    .swiper-img{
      width: 100%;
    }
  }
</style>

