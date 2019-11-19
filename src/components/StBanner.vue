<template>
  <div class="block">
    <el-carousel trigger="click" height="270px">
      <el-carousel-item v-for="(item,index) in bannerImg" :key="index">
        <a href="javascript:void(0);"><img :src="item.url"></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

    export default {
        name: "StBanner",
      data(){
          return{
            bannerImg:[
              {url:require('../../static/images/banner_01.png')},
              {url:require('../../static/images/banner_02.png')},
              {url:require('../../static/images/banner_03.png')},
            ]
          }
      },
    }
</script>

<style scoped>
img{
  width: 100%;
  height: 270px;
  border-radius: 6px;
  background-color: hsla(0,0%,71%,.2);
}
</style>
