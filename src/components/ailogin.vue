<template>
    <div class="login-container">
      <div class="ud-login-box">
        <div class="ud-login-picture">
          <img src="@/assets/picture.png">
        </div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <div class="title-container">
            <h3 class="title">系统登录</h3>
          </div>

          <el-form-item prop="username">
            <span class="svg-container">
              <SvgIcon icon-class="user"/>
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="账号"
              name="username"
              type="text"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <span class="svg-container">
              <SvgIcon icon-class="password"/>
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="密码"
              name="password"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <!-- <span class="show-pwd" @click="showPwd">
            <SvgIcon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>-->
          </el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            size="small"
            style="width:30%;margin:15px 0 30px; height: 38px;"
            @click="handleLogin"
          >登录</el-button>
          <el-button
            :loading="loading"
            type="primary"
            size="small"
            style="width:30%;margin:15px 0 30px; height: 38px;"
            @click="handleChangePassword"
          >修改密码</el-button>
          <el-button
            :loading="loading"
            type="primary"
            size="small"
            style="width:30%;margin:15px 0 30px; height: 38px;"
            @click="handleForgetPassword"
          >忘记密码</el-button>
          <div style="position:relative">
            <div class="tips">
              <span>账号 : admin</span>
              <span>密码 : 111111</span>
            </div>
          </div>
        </el-form>
      </div>
    <!-- 修改密码 -->
    <el-dialog title="修改密码" :visible.sync="changepwdvisible">
      <el-form
        ref="dataForm"
        :rules="changepwdrules"
        :model="changetemp"
        label-position="right"
        class="ud-dialog-form"
        label-width="15%"
        :inline-message="true"
        style="width: 100%; padding:0 50px;"
      >
        <el-form-item label="用户号" prop="opno">
          <el-input
            style="width: 80%;"
            :readonly="ifforgetpwd?true:false"
            v-model="changetemp.opno"
          />
        </el-form-item>
        <el-form-item label="原密码" prop="pwd">
          <el-input
            style="width: 80%;"
            :readonly="ifforgetpwd?true:false"
            v-model="changetemp.pwd"
          />
        </el-form-item>
        <el-form-item label="新密码" prop="newpwd">
          <el-input style="width: 80%;" v-model="changetemp.newpwd"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changepwdvisible = false">取 消</el-button>
        <el-button type="primary" @click="changepwd()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 忘记密码 -->
    <el-dialog title="忘记密码" :visible.sync="forgetpwdvisible">
      <el-form
        ref="dataForm"
        :rules="forgetpwdrules"
        :model="forgettemp"
        label-position="right"
        class="ud-dialog-form"
        label-width="15%"
        :inline-message="true"
        style="width: 100%; padding:0 50px;"
      >
        <el-form-item label="用户号" prop="opno">
          <el-input style="width: 80%;" value v-model="forgettemp.opno"/>
        </el-form-item>
        <el-form-item label="手机号" prop="phoneno">
          <el-input style="width: 80%;" :readonly="true" v-model="forgettemp.phoneno"/>
        </el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          size="small"
          style="width:30%;margin:15px 0 30px; height: 38px;"
          @click="sendverifycode"
        >发送</el-button>
        <el-form-item label="验证码" prop="verifycode">
          <el-input
            style="width: 80%;"
            oninput="if(value.length>4)value=value.slice(0,4)"
            :enabled="ifhassendcode"
            v-model="forgettemp.verifycode"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="forgetpwdvisible = false">取 消</el-button>
        <el-button type="primary" @click="validatecode()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate"
import { validPassword } from '@/utils/validate'
import Cookies from 'js-cookie'
import  SvgIcon  from './SvgIcon'
import { ailogin } from '@/api/user'
export default {
  components:{SvgIcon},
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('账户格式有误'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6个字符'))
      } else if(value==='888888'){
        //调用后台验证密码是否正确
        callback()
      } else {
        //调用后台验证密码是否正确
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (value.length < 11) {
        callback(new Error('电话号码不能少于11个字符'))
      }
      var regphone=/^1[3456789]\d{9}$/
      if(!regphone.test(value)){
        callback(new Error('电话号码格式有误，请重新输入'))
      }
      callback()
    }
    const validateCode = (rule, value, callback) => {
      var regcode=/^\d{4}$/
      if(!regcode.test(value)){
        callback(new Error('验证码格式有误'))
      }
      callback()
    }
    return {
      ifhassendcode: false,
      changepwdvisible: false,
      forgetpwdvisible: false,
      ifforgetpwd: false,
      changetemp:{
        opno:"",
        pwd:"",
        newpwd:""
      },
      forgettemp:{
        opno:"",
        phoneno:"",
      },
      cashviews: ['Dashboard'],
      loginForm: {
        username: 'zhangcheng',
        password: '123456'
      },

      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      forgetpwdrules: {
        opno: [{ required: true, trigger: 'blur', validator: validateUsername }],
        verifycode: [{ required: true, trigger: 'blur', validator: validateCode }],
      },
      changepwdrules: {
        opno: [{ required: true, trigger: 'blur', validator: validateUsername }],
        pwd: [{ required: true, trigger: 'blur', validator: validatePassword }],
        newpwd: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    //修改密码
    changepwd(){
      console.log(修改密码)
    },
    //校验手机验证码是否正确
    validatecode(){
      ifforgetpwd=true
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async handleLogin() {
      this.loading = true
      var userdata={opno:this.loginForm.username,pwd:this.loginForm.password}
      ailogin(userdata).then(res=>{
        if(res.data.code===0){
          this.loading = false
          Cookies.set("opno", this.loginForm.username)
          this.$router.push({ path: this.redirect || '/exam' })
          this.loading = false
        }else{
          alert(res.data.message)
        }
        this.loading = false
      })

    },
    handleChangePassword() {
      this.changepwdvisible=true
      /*this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })*/
    },
    sendverifycode(){
      this.ifhassendcode=true
      console.log('sendverifycode')
    },
    handleForgetPassword() {
      this.forgetpwdvisible=true
      /*this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })*/
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
@import "~@/styles/theme.scss";
$bg: #283443;
$light_gray: #666;
$cursor: #666;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    width: 75%;
    height: 45px;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #f1f1f1 inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 0px solid rgba(255, 255, 255, 0.1);
    background: #f1f1f1;
    color: #666;
    margin-bottom: 25px !important;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$font_color: #333;

.login-container {
  min-height: 100%;
  width: 100%;
  //background-color: $bg;
  background: url("~@/assets/login_bk.jpg") fixed top no-repeat;

  .svg-container {
    padding: 1px 5px 3px 15px;
  }
  .ud-login-box {
    background: url("~@/assets/login_box.png") center center no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    width: 55.8%;
    margin: 0 auto;
    position: relative;
    transform: translateY(35%);
    display: flex;
    .ud-login-picture {
      float: left;
      width: 40%;
      height: auto;
      margin: 0 0 0 12%;
      align-self: center;
      transform: translateY(20%) \9;
      img {
        width: 90%;
        // 解决ie浏览器退出登录时的样式问题
        height: auto;
      }
    }
    .login-form {
      position: relative;
      width: 30%;
      max-width: 100%;
      overflow: hidden;
      float: right;
      margin: 85px 30px;
      margin: 85px 130px 85px 30px\9;
    }
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .ud-login-box .login-form {
      margin: 100px 30px;
    }
    .ud-login-box .ud-login-picture {
      transform: none;
    }
  }

  .tips {
    font-size: 12px;
    color: #999;
    margin-bottom: 5px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    color: #666;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $font_color;
      margin: 0px auto 70px auto;
      text-align: center;
      font-weight: normal;
    }

    .set-language {
      color: #999;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
      padding-top: 4px;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
