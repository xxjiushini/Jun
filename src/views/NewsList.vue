<template>
    <el-container class="el-container">
      <el-header>
        <v-stHeader ref="header"></v-stHeader>
      </el-header>
      <el-main>
        <div class="main clearfix">
          <div class="main-left">
           <div class="content-left">
            {{list}}
           </div>
          </div>
          <div class="main-right">
              <div class="content-right">
                右侧区域
              </div>
          </div>
        </div>
        <test-page v-bind:parentUrl="urlList"></test-page>
      </el-main>
    </el-container>
</template>

<script>
    import TestPage from '@/components/TestPage';

    export default {
        name: "NewsList",
      components: {'test-page':TestPage},
      data(){
          return{
            list:'11111',
            url:this.$route.query.url,
            urlList:{
              a:'../../static/json/newsList.json',
              b:'../../static/json/newsList.json',
            }
          }
      },
      methods:{
        getList(){
          this.$axios.get(this.url).then(response => {
            console.log(response.data.data);
            this.list = response.data.data
          }, response => {
            console.log("error");
          });
        },
      },
      mounted(){
        this.getList()
      }

    }



</script>

<style scoped>
  .el-container{
    background-color: #f9f9f9;
  }
  .main{
    width: 1000px;
    margin: 0 auto;
    padding: 0 16px 16px 16px;
  }
  .main-left{
    float: left;
    width: 66.666667%;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
  }
  .main-right{
    float: right;
    width: 29.166667%;
    margin-left: 4.166666%;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
  }
  .content-left{
    padding: 24px;
  }
  .content-right{
    padding: 16px;
  }

</style>
