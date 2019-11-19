<template>
  <el-container>
    <el-header>
      <v-stHeader ref="header"></v-stHeader>
    </el-header>

    <el-main>
      <main class="elmain clearfix">
        <div class="main">
          <el-button type="primary" @click="pauseCode()">{{count}}<i class="fa fa-pause"></i></el-button>
          <v-stBanner></v-stBanner>
          <ul>
            <li class="main-list" v-for="(value, index) in news" v-bind:key="value.id">
              <div class="content">
                <a href="javascript:void(0);" target="_blank" class="main-title" :class="{isClick:index===number}" v-on:click="openNews(index)">
                  {{value.title}}
                </a>
                <p class="abstract">
                  {{value.abstract}}
                </p>
                <ul class="subinfo clearfix">
                  <li>
                    <i class="fa fa-diamond"></i>
                    <span>{{value.score}}</span>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      {{value.author}}
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <i class="fa fa-commenting"></i>
                      <span>{{value.comment}}</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <i class="fa fa-heart"></i>
                      <span>{{value.like}}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <a href="javascript:void(0);" class="main-right">
                <img v-bind:src="value.imgUrlR" height="100%">
              </a>
            </li>
          </ul>
          <a  href="javascript:void(0);" class="more">阅读更多</a>
        </div>

        <div id="divRight">
          <v-stCard></v-stCard>
        </div>
      </main>
    </el-main>

    <el-footer>
      <v-stFooter></v-stFooter>
    </el-footer>
  </el-container>
</template>

<script>
  import StFooter from '@/components/StFooter';
  import StBanner from '@/components/StBanner';
  import StRightCard from '@/components/StRightCard';

    export default {
        name: "StNews",
      components: {'v-stFooter':StFooter,'v-stBanner':StBanner,'v-stCard':StRightCard},
      data(){
        return{
          msg:'我是父组件',
          news:null,
          number:null,
          count: '',
          timer:null,
          flag:true,
        }

      },
      methods:{
        openNews(index){
          let routeUrl=this.$router.resolve({ path:'/news',query:{url: '../../static/json/newsList.json'}})
          window.open(routeUrl.href, '_blank');
          this.number=index;
        },
        getNews() {
          this.$axios.get('../../static/json/news.json').then(response => {
            console.log(response.data.object);
            this.news = response.data.object
          }, response => {
            console.log("error");
          });
        },
        //计算
        getComputed(a,b){
          let result=b-a;
          if (result>0) {
            return "<span style='color: red'>增加了"+result+"</span>"
          }
          else if (result==0) {
            return "<span>持平</span>"
          }
          else {
            return "<span style='color: darkblue'>减少了"+(-result)+"</span>"
          }
        },
        getCode(time){
          this.count = time;
          this.timer = setInterval(() => {
            this.count--;
            if (this.count<0) {
              this.count='5'
              //为0的时候回调写在这
              // clearInterval(this.timer);
            }
          },1000)
        },
        pauseCode(){
          if (this.flag) {
            clearInterval(this.timer);
            this.flag = false
          }else {
            this.getCode(this.count);
            this.flag = true
          }
        }
      },
      created() {
        this.getCode(5);
      },
      mounted () {
        this.getNews();
      },


    }

</script>

<style scoped>
  .elmain{
    width: 960px;
    margin: 0 auto;
    padding-top: 10px;
  }
  .main{
    width: 66.666667%;
    float: left;
  }
  .main-list{
    position: relative;
    width: 100%;
    min-height: 120px;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .content{
    padding-right: 165px;
  }
  .main-title{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
    line-height: 1.5;
    color: #2f2f2f;
  }
  .main-title:hover{
    text-decoration: underline;
  }
  .isClick{
    color: #969696;
  }
  .abstract{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .subinfo{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
  .subinfo li{
    float: left;
    color: #ea6f5a;
    margin-right: 16px;
  }
  .subinfo li a{
    color: #b4b4b4;
  }
  .subinfo li a:hover{
    color: #787878;
  }
  .more{
    display: block;
    /*height: 40px;*/
    margin-top: 30px;
    margin-bottom: 60px;
    padding: 10px 15px;
    background-color: #a5a5a5;
    border-radius: 100px;
    font-size: 15px;
    text-align: center;
    color: white;
  }
  .more:hover{
    background-color: #9b9b9b;
  }
  .main-right{
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 150px;
    height: 100px;
  }
  .main-right img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
  #divRight{
    width: 29.166667%;
    margin-left: 4.166666%;
    float: right;
  }
</style>
