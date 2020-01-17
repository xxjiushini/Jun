<template>
  <header id="header">
    <div class="header-container clearfix">
      <a href="javascript:void(0);" class="header-logo" @click="openHome">
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
          <li v-show="!isLogin"><router-link to="/sign_in">登录</router-link></li>
          <li v-show="!isLogin"><router-link to="/sign_up">注册</router-link></li>
          <li v-show="isLogin" class="person">
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              active-text-color="normal"
              @select="handleSelect"
            >
              <el-submenu index="1">
                <template slot="title"><img src="../assets/parson.jpg" height="40" width="40" style="border-radius: 50%;"/></template>
                <el-menu-item index="1-1">
                  <p>
                    <i class="fa fa-user"></i>
                    我的主页
                  </p>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <p>
                    <i class="fa fa-bookmark"></i>
                    收藏的文章
                  </p>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <p>
                    <i class="fa fa-heart"></i>
                    喜欢的文章
                  </p>
                </el-menu-item>
                <el-menu-item index="1-4">
                  <p>
                    <i class="fa fa-jpy"></i>
                    已购内容
                  </p>
                </el-menu-item>
                <el-menu-item index="1-5">
                  <p>
                    <i class="fa fa-credit-card-alt"></i>
                    我的钱包
                  </p>
                </el-menu-item>
                <el-menu-item index="1-6">
                  <p>
                    <i class="fa fa-cog"></i>
                    设置
                  </p>
                </el-menu-item>
                <el-menu-item index="1-7">
                  <p>
                    <i class="fa fa-info-circle"></i>
                    帮助与反馈
                  </p>
                </el-menu-item>
                <el-menu-item index="1-8">
                  <p>
                    <i class="fa fa-sign-out"></i>
                    退出
                  </p>
                </el-menu-item>
              </el-submenu>
            </el-menu>

          </li>
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
          }
      },
      computed:{
        //判断是否登录
        isLogin:function () {
            return this.$store.getters.getStateFn;
          }
      },
      methods:{
        openHome(){
          this.$router.push('/')
        },
        logOut(){
          localStorage.removeItem('Flag');
          window.location.reload();
          // alert(123)
        },
        handleSelect(key, keyPath) {
          if (key == '1-8') {
            this.logOut();
          }
          // console.log(key, keyPath);
        }
      },

    }
</script>

<style scoped lang="scss">
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
  .header-left>ul>li{
    float: left;
    margin-right: 10px;
  }
  .header-left li:first-child a{
    color: $baseColor
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
  .header-right>ul{
    height: 56px;
    vertical-align: middle;
  }
  .header-right>ul>li{
    float: left;
    display: block;
    margin-right: 20px;
  }
  .header-right>ul>li a{
    padding: 15px 10px;
  }
  .header-right>ul>li:nth-child(2) img{
    vertical-align: middle;
  }
  .header-right li:nth-child(3) a{
    color: $fontColor;
    font-size: 15px;
  }
  .header-right>ul>li:nth-child(4) a{
    color: $baseColor;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 50px;
    border: 1px solid $baseColor;
    line-height: 20px;
  }
  .header-right>ul>li:nth-child(4) a:hover{
    border-color: #ec6149;
    background-color: rgba(236,97,73,.05);
  }
  .header-right>ul>li:last-child a{
    color: #ffffff;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 50px;
    border: 1px solid $baseColor;
    background-color: $baseColor;
    line-height: 20px;
  }
  .header-right>ul>li:last-child a:hover{
    background-color: #ec6149;
  }
  .header-right>ul>li:last-child i{
    margin-right: 6px;
  }

  /*个人信息下拉*/
  .el-submenu{
    width: 80px;
    :hover{
      background-color: #eee;
    }
  }
  .person>>>.el-submenu__title{
    width: 80px;
    height: 56px;
    line-height: 56px;
    padding: 0 10px;
  }
  .el-menu-item{
    padding: 0!important;
    height: auto!important;
    color: #333!important;
    /*width: 160px!important;*/
    :hover{
      background-color: #eee!important;
    }
    p{
      /*width: 160px;*/
      padding: 10px 20px;
    }
    i{
      color: $baseColor;
      font-size: 18px;
      /*margin-right: 15px;*/
      width: 30px;
    }
  }
</style>
