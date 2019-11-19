<template>
    <footer id="footer">
      <div class="footer-c">
        <ul class="foot-title clearfix">
          <li v-for="(item,index) in titles" :key="index">
            <a href="javascript:void(0);">{{item.title}}</a>
            {{item.dot}}
          </li>
        </ul>
        <div class="foot-body">
          ©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252" target="_blank">
            <img src="@/assets/identification.png">
          </a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252" target="_blank" class="records">沪公网安备31010402002252号 /</a>
          <a href="http://www.shjbzx.cn/" target="_blank">
            <img src="@/assets/e-mail.png">
          </a>
          简书网举报电话：021-34770013 /
          <a href="javascript:void(0);" target="_blank">
            <img src="@/assets/letter.jpg">
          </a>
          亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 /
          <a href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&serial=9031000020171107081457000002158769-SAIC_SHOW_310000-20171115131223587837&signData=MEQCIADWZ5aTcBeER5SOVp0ly+ElvKnwtjczum6Gi6wZ7/wWAiB9MAPM22hp947ZaBobux5PDkd0lfqoCOkVV7zjCYME6g==" target="_blank">
            <img src="@/assets/records.png">
          </a>
        </div>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "StFooter",
      data(){
          return{
            titles:[
              {title:'关于简书', dot:'·'},
              {title:'联系我们', dot:'·'},
              {title:'加入我们', dot:'·'},
              {title:'简书出版', dot:'·'},
              {title:'品牌与徽标', dot:'·'},
              {title:'帮助中心', dot:'·'},
              {title:'合作伙伴', dot:''},
              ],
          }
      }
    }
</script>

<style scoped>
  #footer{
    width: 960px;
    margin: 0 auto 20px;
    padding-top: 25px;
    font-size: 13px;
    color: #c8c8c8;
  }
  .footer-c{
    width: 70.833333%;
  }
  .foot-title li{
    float: left;
  }
  .foot-title li a{
    color: #969696;
  }
  #footer a:hover{
    color: #2f2f2f;
  }
  #footer img{
    height: 30px;
    vertical-align: middle;
  }
  .foot-body{
    margin-top: 10px;
  }
  .records{
    color: #c8c8c8;
  }
</style>
