<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-size:17px;
  }
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  a:link{
    text-decoration:none;   /* 指正常的未被访问过的链接*/
  }
  a{
    color: #333;
  }

  .container:before,.container:after ,
  .clearfix:before,.clearfix:after{
    content:"";
    display: table;
  }
  .container:after,.clearfix:after{
    clear: both;
  }
  html,body,#app{
    height: 100%;
  }
</style>
