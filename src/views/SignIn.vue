<template>
    <div class="sign">
      <router-link to="/"><img src="@/assets/logo.png" alt=""></router-link>
      <div class="main">
        <div>
          <ul class="title clearfix">
            <li>
              <router-link to="/sign_in" class="sign-in">登录</router-link>
            </li>
            <li><span>·</span></li>
            <li>
              <router-link to="/sign_up" class="sign-up">注册</router-link>
            </li>
          </ul>
        </div>
        <div class="sign-form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="tel">
              <el-input type="tel" v-model.number="ruleForm.tel" placeholder="手机号或邮箱" prefix-icon="fa fa-mobile" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm.pass" placeholder="密码" autocomplete="off" prefix-icon="fa fa-lock" maxlength="15"></el-input>
            </el-form-item>

            <div class="remember">
              <el-checkbox v-model="checked">记住我</el-checkbox>
              <a href="javascript:void(0)">登录遇到问题?</a>
            </div>
            <el-form-item style="text-align: center">
              <el-button type="primary" round id="signUp" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="more-sign">
          <p>————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社交帐号登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;————</p>
          <a href="javascript:void(0)" class="weibo"><i class="fa fa-weibo"></i></a>
          <a href="javascript:void(0)" class="weixin"><i class="fa fa-weixin"></i></a>
          <a href="javascript:void(0)"><i class="fa fa-qq"></i></a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SignaIn",
      data() {
        var validateTel = (rule, value, callback) => {
          if (!value) {
            this.$message({
              message: '请输入手机号或邮箱!',
              type: 'warning'
            })
          } else {
            if (value.toString().length != 11) {
              console.log(value);
              this.$message({
                message: '请输入11位手机号!',
                type: 'warning'
              })
            } else {
              callback();
            }
          }
        };
        var validatePass = (rule, value, callback) => {
          if (!value) {
            this.$message({
              message: '请输入密码!',
              type: 'warning'
            })
          } else {
            if (value.length<6||value.length>15) {
              this.$message({
                message: '请输入6-15位密码!',
                type: 'warning'
              })
            } else {
              callback();
            }
          }
        };
        return {
          checked: true,
          ruleForm: {
            tel: '',
            pass: ''
          },
          rules: {
            tel: [
              { validator: validateTel, trigger: 'blur' }
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.ruleForm);
              let username=this.ruleForm.tel;
              let psd=this.ruleForm.pass;
              if (username=='13032551523'&&psd=='123456') {
                this.$axios.get("../../static/json/news.json", /*{user:this.tel,password:this.pass}*/)
                  .then(data => {
                    //设置Vuex登录标志为true，默认userLogin为false
                    this.$store.dispatch("userLogin", true);
                    //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
                    //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                    localStorage.setItem("Flag", "isLogin");
                    //提示
                    this.$message({
                      message: '登录成功!',
                      type: 'success'
                    });
                    //登录成功后跳转到指定页面
                    this.$router.go(-1)||this.$router.push('/');
                  }, response => {
                    this.$message.error('error!');
                  });
              }else {
                this.$message({
                  message: '手机号或者密码错误!',
                  type: 'warning'
                });
              }
            } else {
              return false;
            }
          });
        },
      }
    }
</script>

<style scoped lang="scss">
  body{
    width: 100%;
    height: 100%;
  }
  .sign{
    background-color: #f1f1f1;
    height: 100%;
    font-size: 14px;
  }
  .main{
    width: 300px;
    height: 485px;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 50px 50px 30px 50px;
  }
  .title{
    font-weight: 400;
    color: #969696;
    font-size: 18px;
    display: table;
    margin: 0 auto 50px auto;
    li{
      float: left;
      a{
        padding: 10px;
      }
      span{
        padding: 10px;
        font-weight: bold;
      }
    }
  }
  .sign-in{
    font-weight: bolder;
    border-bottom: 2px solid $baseColor;
    color: $baseColor;
  }
  .sign-up{
    color: $fontColor;
    :hover{
      border-bottom: 2px solid $baseColor;
    }
  }
  .sign-form{
    >>>.el-input__inner{
      height: 50px;
    }
    .el-form-item{
      margin-bottom: 0;
    }
  }
  .remember{
    margin: 20px auto;
    a{
      float: right;
      color: $fontColor;
    }
  }
  #signUp{
    width: 100%;
    height: 43px;
  }
  .sign-msg{
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    a{
      color: #3194d0;;
    }
  }
  .more-sign{
    @extend .sign-msg;
    margin-top: 50px;
    p{
      margin-bottom: 10px;
    }
    a{
      font-size: 24px;
    }
    .weibo{
      color: #e05244;
      margin-right: 32px;
    }
    .weixin{
      color: #3db922;
      margin-right: 32px;
    }
  }
</style>
