<template>
    <div id="right_c">
      <ul id="card">
        <li v-for="item in card">
          <a href="javascript:void(0);"><img :src="item.cardUrl"></a>
        </li>
      </ul>

      <!--app-->
      <a href="javascript:void(0);" id="app_card"  @mouseenter="mouseOver" @mouseleave="mouseLeave">
        <img :src="appUrl">
        <div class="info">
          <p>
            下载简书手机App&nbsp;
            <i class="fa fa-angle-right"></i>
          </p>
          <p>随时随地发现和创作内容</p>
        </div>
      </a>

      <!--tip-->
      <div id="app-tip" v-if="show">
        <div class="arrow"></div>
        <div class="tip-c">
          <img :src="appUrl">
        </div>
      </div>

      <!--用户展示-->
      <div id="user">
        <a href="javascript:void(0);" id="ad">
          <span>广告</span>
        </a>
        <div class="user-title clearfix">
          推荐作者
          <a href="">
            <i class="fa fa-refresh"></i>
            换一批
          </a>
        </div>
        <ul id="user-ul">
          <li class="user-list clearfix" v-for="(user, name) in userList" :key="user.id">
            <a href="javascript:void(0);" class="uesr-photo">
              <div class="demo-basic--circle">
                <div class="block"><el-avatar :size="50" :src="user.url"></el-avatar></div>
              </div>
            </a>
            <div class="user-center">
              <a href="javascript:void(0);" class="uesr-name">{{user.name}}</a>
              <p class="user-info">
                写了<span>{{user.write}}</span>k字 · <span>{{user.like}}</span>k喜欢
              </p>
            </div>
            <a href="javascript:void(0);" class="user-right">
              <i class="fa fa-plus"></i>
              关注
            </a>
          </li>
        </ul>
        <a href="javascript:void(0);" id="see_all">
          查看全部&nbsp;
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "StRightCard",
      data(){
          return{
            card:[
              {cardUrl:require('../../static/images/card_r_01.png')},
              {cardUrl:require('../../static/images/card_r_02.png')},
              {cardUrl:require('../../static/images/card_r_03.png')},
              {cardUrl:require('../../static/images/card_r_04.png')},
            ],
            appUrl:require('../../static/images/app_code.png'),
            show:false,
            userList:null
          }
      },
      methods:{
          //移入
        mouseOver(){
          this.show=true;
        },
        //移出
        mouseLeave(){
          this.show=false;
        },
        getUser() {
          this.$axios.get('../../static/json/user.json').then(response => {
            // console.log(response.data.object);
            this.userList = response.data.object
          }, response => {
            console.log("error");
          });
        }
      },
      mounted () {
        this.getUser()
      },

    }
</script>

<style scoped>
  #right_c{
    position: relative;
  }
  #card{
    padding-bottom: 4px;
  }
  #card>li{
    height: 50px;
    margin-bottom: 6px;
  }
  #card img{
    width: 100%;
    border-radius: 4px;
  }

  #app_card{
    display: block;
    margin-bottom: 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: white;
  }
  #app_card>img{
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
  .info{
    display: inline-block;
    margin-left: 7px;
    vertical-align: middle;
  }
  .info>p:first-child{
    font-size: 15px;
    color: #333;
  }
  .info>p:last-child{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
  #app-tip{
    position: absolute;
    top: 10px;
    left: 48px;
  }
  .tip-c{
    padding: 10px;
    border: 1px solid rgba(0,0,0,.2);
    background-color: white;
    border-radius: 6px;
    width: fit-content;
  }
  #app-tip img{
    width: 160px;
    height: 160px;
  }
  .arrow:after {
  position: relative;
  display: block;
  top: 194px;
  left:87px;
  width: 0;
  height: 0;
  content: '';
  border-style: solid;
  border-width: 10px;
  border-color: #fff #fff transparent transparent;
  transform: rotate(135deg);
  box-shadow: 2px -2px 2px #ccc;
  z-index: 999;
  }

  #ad{
    background: url("../../static/images/ad.png") no-repeat;
    position: relative;
    border-radius: 4px;
    display: block;
    background-size: cover;
    height: 160px;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
    overflow: hidden;
  }
  #ad>span{
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: #000;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.7;
  }
  .user-title{
    font-size: 14px;
    color: #969696;
  }
  .user-title a{
    font-size: 14px;
    color: #969696;
    float: right;
  }
  #user-ul{
    margin-bottom: 20px;
  }
  .user-list{
    margin-top: 15px;
  }
  .uesr-photo{
    float: left;
  }
  .user-center{
    float: left;
    margin-left: 10px;
    margin-top: 5px;
  }
  .uesr-name{
    font-size: 14px;
  }
  .user-info{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .user-right{
    float: right;
    font-size: 13px;
    color: #42c02e;
    margin-top: 5px;
  }
  #see_all{
    display: block;
    border: 1px solid #dcdcdc;
    background-color: #f7f7f7;
    border-radius: 4px;
    font-size: 13px;
    text-align: center;
    color: #787878;
    padding: 7px 0;
  }
</style>
