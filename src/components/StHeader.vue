<template>
  <header id="header">
    <div class="header-container clearfix">
      <a href="" class="header-logo">
        <img v-bind:src="imgUrl" height="100%">
      </a>
      <div class="header-left">
        <ul>
          <li><a href="javascript:void(0);" @click="openHome"><i class="fa fa-compass"></i>首页</a></li>
          <li><a href="javascript:void(0);"><i class="fa fa-mobile"></i>下载App</a></li>
          <li><input type="text" placeholder="搜索"></li>
        </ul>
      </div>
      <div class="header-right">
        <ul>
          <li><a href="javascript:void(0);"><i class="fa fa-audio-description"></i></a></li>
          <li><a href="javascript:void(0);"><img v-bind:src="imgBeta" height="25px"></a></li>
          <li><a href="javascript:void(0);">登录</a></li>
          <li><a href="javascript:void(0);">注册</a></li>
          <li><a href="javascript:void(0);"><i class="fa fa-pencil"></i>写文章</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "stHeader",
      data(){
          return{
            imgUrl:require('@/assets/logo.png'),
            imgBeta:require('@/assets/beta.png'),
            msg:'我是子组件'
          }
      },
      methods:{
        openHome(){
          this.$router.push({ path:'/home'})
        }
      }

    }
</script>

<style scoped>
  #header{
    position: fixed;
    right: 0;
    left: 0;
    z-index: 999;
    top: 0;
    border-bottom: 1px solid #e7e7e7;
    background-color: #fff;
    margin-bottom: 20px;
    height: 56px;
    line-height: 56px;
  }
  .header-container{
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
  }
  .header-logo{
    float: left;
    height: 56px;
    padding: 0;
  }
  .header-left{
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .header-left li{
    float: left;
    margin-right: 10px;
  }
  .header-left li:first-child a{
    color: #ea6f5a
  }
  .header-left li:nth-child(2) a:hover{
    background-color: #f5f5f5;
  }
  .header-left li a{
    display: block;
    line-height: 26px;
    padding: 15px;
  }
  .header-left li i{
    margin-right: 5px;
  }
  .header-left input{
    border-radius: 100px;
    width: 180px;
    height: 38px;
    position: relative;
    bottom: 9px;
    font-size: 14px;
    background: #eee;
    border: 1px solid #eee;
    padding-left: 20px;
    padding-right: 40px;
    outline: none;
    vertical-align: bottom;
  }
  .header-right{
    float: right;
    height: 56px;
  }
  .header-right ul{
    height: 56px;
    vertical-align: middle;
  }
  .header-right li{
    float: left;
    display: block;
    margin-right: 20px;
  }
  .header-right li a{
    padding: 15px 10px;
  }
  .header-right li:nth-child(2) img{
    vertical-align: middle;
  }
  .header-right li:nth-child(3) a{
    color: #969696;
    font-size: 15px;
  }
  .header-right li:nth-child(4) a{
    color: #ea6f5a;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 50px;
    border: 1px solid #ea6f5a;
    line-height: 20px;
  }
  .header-right li:nth-child(4) a:hover{
    border-color: #ec6149;
    background-color: rgba(236,97,73,.05);
  }
  .header-right li:last-child a{
    color: #ffffff;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 50px;
    border: 1px solid #ea6f5a;
    background-color: #ea6f5a;
    line-height: 20px;
  }
  .header-right li:last-child a:hover{
    background-color: #ec6149;
  }
  .header-right li:last-child i{
    margin-right: 6px;
  }
</style>
