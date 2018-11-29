<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe6fb;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 
      景点/目的地/主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe63d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang="scss" scoped>
  @import '~styles/varibles.scss';
  .header{
    display: flex;
    line-height: .86rem;
    background: $bgColor;
    color: #fff;
    .header-left{
      width: .64rem;
      float: left;
      .back-icon{
        text-align: center;
        font-size: .4rem;
      }
    }
    .header-input{
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      background: #fff;
      border-radius: .1rem;
      margin-top: .12rem;
      margin-left: .2rem;
      color: #ccc;
      padding-left: .2rem;
    }
    .header-right{
      width: 1.24rem;
      float: right;
      text-align: center;
      font-size: .3rem;
      .arrow-icon{
        margin-left: -0.04rem;
        font-size: .28rem;
      }
    }
  }
</style>