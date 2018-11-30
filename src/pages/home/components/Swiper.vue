<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id" data-swiper-autoplay="3000">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true
      },
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
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

