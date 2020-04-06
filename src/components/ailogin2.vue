<template>
  <div class="appcontainer">
    <canvas id="canvas" class="particlecanvas" />
    <div class="login" id="login">
      <div class="login_title">
        <span>系统登录</span>
      </div>
      <div class="login_fields">
        <div class="login_fields__user">
          <div class="icon">
            <img alt src="@/assets/img/user_icon_copy.png" />
          </div>
          <input
            name="login"
            onfocus="this.placeholder=''"
            onblur="this.placeholder=this.value===''?'用户名':''"
            placeholder="用户名"
            maxlength="32"
            type="text"
            autocomplete="off"
            v-model="username"
          />
          <div class="validation">
            <img alt src="@/assets/img/tick.png" />
          </div>
        </div>
        <div class="login_fields__password">
          <div class="icon">
            <img alt src="@/assets/img/lock_icon_copy.png" />
          </div>
          <input
            name="pwd"
            placeholder="密码"
            maxlength="16"
            type="password"
            autocomplete="off"
            onfocus="this.placeholder=''"
            onblur="this.placeholder=this.value===''?'密码':''"
            v-model="password"
          />
          <div class="validation">
            <img alt src="@/assets/img/tick.png" />
          </div>
        </div>
        <!--div class="login_fields__password">
          <div class="icon">
            <img alt src="@/assets/img/key.png">
          </div>
          <input name="ValidateNum" placeholder="验证码" maxlength="4" type="text" autocomplete="off">
          <div class="validation" style="opacity: 1; right: -5px;top: -3px;">
            <canvas class="J_codeimg" id="myCanvas" onclick="Code();">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
          </div>
        </div-->
        <div class="login_fields__submit1">
          <input type="button" name="submit" value="登录" @click="handleLogin"/>
        </div>
        <div class="login_fields__submit2">
          <input type="button" name="game" value="游戏" @click="handlegame"/>
        </div>
      </div>
      <div class="success"></div>
      <div class="disclaimer">
        <p>欢迎登陆AI运营之光竞赛答题系统</p>
      </div>
    </div>
    <div class="sp-container" id="sp-container">
      <div class="sp-content">
        <div class="sp-wrap sp-left">
          <h2>
            <span class="sp-top">15大热门方向</span>
            <span class="sp-mid">400道考题</span>
            <span class="sp-bottom">机器学习、数据挖掘等方向</span>
          </h2>
        </div>
        <div class="sp-wrap sp-right">
          <h2>
            <span class="sp-top">六大奖项覆盖28人次</span>
            <span class="sp-mid">
              5400元奖励
              <!--i>!</i-->
              <!--i>?</i-->
            </span>
            <span class="sp-bottom">你，准备好了吗？</span>
          </h2>
        </div>
      </div>
      <div class="sp-full">
        <h2>开始你的AI运营之光竞赛!</h2>
        <router-link to="/exam">开始比赛</router-link>
        <!--a href="http://www.jsdaima.com/register/" target="_blank">开始比赛</a-->
      </div>
    </div>
    <canvas id="gamecanvas" width=640 height=480></canvas>
    <canvas id="tempcanvas" width=320 height=240></canvas>
  </div>
</template>
<script>
import { particle } from "@/js/particle.js";
import { ailogin } from '@/api/user';
import Cookies from 'js-cookie';
import { InitMario } from '@/js/initmario.js';
import { InitEngine } from '@/js/initengine.js';
export default {
  name: "test1",
  data() {
    return {
      username:'',
      password:'',
      pagetimer:[],
      canvas:null,
      printer:null,
    };
  },
  methods: {
    handleLogin() {
      var userdata = {
        opno: this.username,
        pwd: this.password
      };
      ailogin(userdata).then(async res => {
        if (res.data.code === 0) {
          await this.$store.dispatch("user/setopno", this.username);
          Cookies.set("timelimit", res.data.timelimit);
          Cookies.set("leavelimit", res.data.leavelimit);
          sessionStorage.setItem("leavenum",0)
          this.pagetimer.forEach(item => {
            cancelAnimationFrame(item);
          });
          var canvas1 = document.getElementById("canvas").getContext("2d"); //(".pg-canvas")
          canvas1.height = 0;
          canvas1.clearRect(0, 0, window.innerWidth, window.innerHeight);
          document.getElementById('login').style.display = "none";
          document.getElementById('sp-container').style.display = "block";
        } else {
          alert(res.data.message);
        }
      });
    },
    handlegame(){
      window.top.location.href='https://www.xjtuzhangcheng.top/mario/index.html'
    }
  },
  mounted() {
    //粒子背景特效
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    c.setAttribute("width", window.innerWidth);
    c.setAttribute("height", window.innerHeight);
    c.style.zIndex = 2;
    c.style.cssText =
      "position:absolute;left:0px;top:0px;width:" +
      window.innerWidth +
      "px;height:" +
      window.innerHeight +
      "px;";
    //c.style.cssText="position:absolute;left:"+0+";top:- "+window.innerHeight/2+";width:"+window.innerWidth+";height:"+window.innerHeight
    //点击登录按钮
    this.pagetimer = particle(ctx);
  }
};
</script>
<style scoped>
@import url("../assets/css/demo.css");
@import url("../assets/css/styles.css");
@import url("../assets/css/default.css");
@import url("../assets/css/loaders.css");
@import url("../assets/css/demo3.css");
@import url("../assets/css/style3.css");
.appcontainer {
  height: 100%;
  width: 100%;
  position: fixed;
  background: url("../assets/img/bkground.jpg") center center no-repeat;
  overflow: hidden;
  background-size: cover;
}
.canvas {
  height: 100%;
  width: 100%;
}
</style>