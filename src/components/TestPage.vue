<template>
    <div style="height: 300px;width: 800px;">
      <div>{{list}}</div>
      <div>{{list2}}</div>
      <div>{{this.parentUrl}}</div>
    </div>
</template>

<script>
    export default {
        name: "TestPage",
      props:{parentUrl:Object},
      data(){
        return{
          list:'',
          list2:'',
          url:this.parentUrl.a,
          url2:this.parentUrl.b,
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
        getList2(){
          this.$axios.get(this.url2).then(response => {
            console.log(response.data.data);
            this.list2 = response.data.data
          }, response => {
            console.log("error");
          });
        },
      },
      mounted(){
        console.log(this.parentUrl);
        this.getList();
        this.getList2()
      }
    }
</script>

<style scoped>

</style>
