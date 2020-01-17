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
            <el-form-item prop="name">
              <el-input type="text" v-model="ruleForm.name" placeholder="你的昵称" prefix-icon="fa fa-user" maxlenngth="6"></el-input>
            </el-form-item>
            <el-form-item prop="tel">
              <el-input type="tel" v-model.number="ruleForm.tel" placeholder="手机号" prefix-icon="fa fa-mobile" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item prop="smscode" class="code" v-if="isTel">
              <el-input v-model="ruleForm.smscode" placeholder="验证码" prefix-icon="fa fa-check" maxlength="6" oninput = "value=value.replace(/[^\d.]/g,'')"></el-input>
              <el-button type="success" round :disabled='isDisabled' @click="sendCode" ref="send">{{buttonText}}</el-button>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm.pass" placeholder="设置密码" autocomplete="off" prefix-icon="fa fa-lock" maxlength="15"></el-input>
            </el-form-item>

            <el-form-item style="text-align: center;margin: 20px 0 10px;">
              <el-button type="success" round id="signUp" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="sign-msg">
          点击 “注册” 即表示您同意并愿意遵守简书
          <p>
            <a href="javascript:void(0)">用户协议</a>
            <span>和</span>
            <a href="javascript:void(0)">隐私政策</a>
          </p>
        </div>
        <div class="more-sign">
          <p>————&nbsp;&nbsp;&nbsp;&nbsp;社交帐号直接注册&nbsp;&nbsp;&nbsp;&nbsp;————</p>
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
        var validateName = (rule, value, callback) => {
          if (!value) {
            this.$message({
              message: '请输入昵称!',
              type: 'warning'
            })
          } else {
            if (value.length >6) {
              this.$message({
                message: '请输入1-15位昵称!',
                type: 'warning'
              })
            } else {
              callback();
            }
          }
        };
        var validateTel = (rule, value, callback) => {
          if (!value) {
            this.$message({
              message: '请输入手机号!',
              type: 'warning'
            })
          } else {
            if (value.toString().length != 11) {
              this.$message({
                message: '请输入11位手机号!',
                type: 'warning'
              })
            } else {
              callback();
            }
          }
        };
        var validateTel2 = (rule, value, callback) => {
          if (value) {
            this.isTel=true;
            if (value.toString().length == 11) {
              this.isDisabled=false;
              callback();
            }else {
              this.isDisabled=true;
            }
          }
        };
        var validateCode = (rule, value, callback) => {
          if (!value) {
            this.$message({
              message: '请输入验证码!',
              type: 'warning'
            })
          } else {
            if (value.length !=6) {
              this.$message({
                message: '请输入6位验证码!',
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
              if (value.length < 6 || value.length > 15) {
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
          ruleForm: {
            name: '',
            tel: '',
            smscode:'',
            pass: '',
          },
          rules: {
            name: [
              { validator: validateName, trigger: 'blur' }
            ],
            tel: [
              { validator: validateTel, trigger: 'blur' },
              { validator: validateTel2, trigger: 'change' }
            ],
            smscode: [
              { validator: validateCode, trigger: 'blur' },
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ]
          },
          buttonText: '发送验证码',
          isDisabled: true,//是否禁止点击发送验证码按钮
          flag: true,
          isTel:false
        };
      },
      computed: {
        // isTel: function () {
        //   if (this.ruleForm.tel) return true;
        // },

      },
      methods: {
          //提交注册
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$axios.get("../../static/json/news.json", /*{user:this.tel,password:this.pass}*/)
                .then(data => {
                  if (this.ruleForm.smscode!='888888') {
                    this.$message.error('error!');
                  }
                  //提示
                  this.$message({
                    message: '注册成功!',
                    type: 'success'
                  });
                  //登录成功后跳转到指定页面
                  this.$router.go(-1)||this.$router.push('/');
                }, response => {
                  this.$message.error('error!');
                });
            } else {
              this.$message.error('注册失败!');
              return false;
            }
          });
        },
        //验证手机号
        checkMobile(tel) {
          if (tel.toString().length==11) return true;
          return false
        },
        // <!--发送验证码-->
        sendCode () {
          let tel = this.ruleForm.tel;
          if (this.checkMobile(tel)) {
            console.log(tel)
            let time = 60
            this.buttonText = '已发送'
            this.isDisabled = true
            if (this.flag) {
              this.flag = false;
              let timer = setInterval(() => {
                time--;
                this.buttonText = '重新发送 '+time + ' 秒'
                if (time === 0) {
                  clearInterval(timer);
                  this.buttonText = '重新获取'
                  this.isDisabled = false
                  this.flag = true;
                }
              }, 1000)
            }
          }
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
  .sign-up{
    font-weight: bolder;
    border-bottom: 2px solid $baseColor;
    color: $baseColor;
  }
  .sign-in{
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
  .code >>> .el-form-item__content {
    display: flex;
    align-items: center;
    /*justify-content: space-between;*/
    button {
      position: absolute;
      right: 10px;
    }
    .el-button--success:focus {
      background: #409EFF;
      border-color: #409EFF;
      color: #fff;
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
    .weixin{
      color: #3db922;
      margin-right: 32px;
    }
  }
</style>
