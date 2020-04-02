<template>
  <div>
    <div class="loading" style="display: none;">
      <div class="loadbox">
        <img src="../assets/img/loading.gif" /> 页面加载中...
      </div>
    </div>
    <div class="head">
      <h1>三部党总支AI运营之光人工智能知识竞赛</h1>
      <div class="weather">
        <span id="showTime">2020年3月24日-10时10分59秒</span>
      </div>
    </div>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: 7rem">
            <div class="alltitle">题目分布</div>
            <div
              class="allnav"
              id="echart1"
              _echarts_instance_="ec_1577239837057"
              style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
            >
          </div>
          </div>
          <!--div class="boxall" style="height: 5.8rem">
            <div class="alltitle">难度分布</div>
            <div
              class="allnav"
              id="echart2"
              _echarts_instance_="ec_1577239837058"
              style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
            ></div>
          </div-->
          <div class="boxall" style="height: 7.3rem">
            <div class="alltitle">正确率分布</div>
            <div style="height:100%; width: 100%;">
              <div
                class="sy"
                id="fb1"
                _echarts_instance_="ec_1577239837060"
                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
              ></div>
              <div
                class="sy"
                id="fb2"
                _echarts_instance_="ec_1577239837061"
                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
              ></div>
              <div
                class="sy"
                id="fb3"
                _echarts_instance_="ec_1577239837062"
                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
              ></div>
              <div
                class="sy"
                id="fb4"
                _echarts_instance_="ec_1577239837062"
                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
              ></div>
                            <div
                class="sy"
                id="fb5"
                _echarts_instance_="ec_1577239837060"
                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
              ></div>
              <div
                class="sy"
                id="fb6"
                _echarts_instance_="ec_1577239837061"
                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
              ></div>
              <div
                class="sy"
                id="fb7"
                _echarts_instance_="ec_1577239837062"
                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
              ></div>
              <div
                class="sy"
                id="fb8"
                _echarts_instance_="ec_1577239837062"
                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
              ></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="bar">
            <div class="barbox">
              <ul class="clearfix">
                <li class="pulll_left counter" id="confirm">{{submitnum}}/{{totalnum}}</li>
                <li class="pulll_left counter" id="suspect">{{maxscore}}/100</li>
              </ul>
            </div>
            <div class="barbox2">
              <ul class="clearfix">
                <li class="pulll_left">提交人数/参赛人数</li>
                <li class="pulll_left">最高分/满分</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <div class="map1">
              <img src="../assets/img/lbx.png" />
            </div>
            <div class="map2">
              <img src="../assets/img/jt.png" />
            </div>
            <div class="map3">
              <img src="../assets/img/map.png" />
            </div>
            <div class="ranktitle">实时排行榜</div>
            <div
              class="map4"
              id="map4"
              _echarts_instance_="ec_1577239837065"
              style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
            >
              <div
                style="position: relative; overflow: hidden; width: 1078px; height: 478px; padding: 0px; margin: 0px; border-width: 0px; cursor: pointer;"
              >
                <canvas
                  data-zr-dom-id="zr_0"
                  width="1078"
                  height="478"
                  style="position: absolute; left: 0px; top: 0px; width: 1078px; height: 478px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"
                ></canvas>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="boxall" style="height:5.2rem">
            <div class="alltitle">登录提交人数</div>
            <div
              class="allnav"
              id="echart4"
              _echarts_instance_="ec_1577239837059"
              style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
            >
              <div
                style="position: relative; overflow: hidden; width: 365px; height: 173px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"
              >
                <canvas
                  data-zr-dom-id="zr_0"
                  width="365"
                  height="173"
                  style="position: absolute; left: 0px; top: 0px; width: 365px; height: 173px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"
                ></canvas>
              </div>
              <div></div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 4.5rem">
            <div class="alltitle">各组提交比例</div>
            <div
              class="allnav"
              id="echart5"
              _echarts_instance_="ec_1577239837063"
              style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
            >
              <div
                style="position: relative; overflow: hidden; width: 365px; height: 159px; padding: 0px; margin: 0px; border-width: 0px;"
              >
                <canvas
                  data-zr-dom-id="zr_0"
                  width="365"
                  height="159"
                  style="position: absolute; left: 0px; top: 0px; width: 365px; height: 159px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"
                ></canvas>
              </div>
              <div></div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <!--<div class="boxall" style="height: 3rem">-->
          <!--<div class="alltitle">模块标题样式</div>-->
          <!--<div class="allnav" id="echart6" _echarts_instance_="ec_1577239837064" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"><div style="position: relative; overflow: hidden; width: 365px; height: 146px; padding: 0px; margin: 0px; border-width: 0px;"><canvas data-zr-dom-id="zr_0" width="365" height="146" style="position: absolute; left: 0px; top: 0px; width: 365px; height: 146px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>-->
          <!--<div class="boxfoot"></div>-->
          <!--</div>-->
          <!--修改-->
          <div class="boxall" style="height: 4.5rem">
            <div class="alltitle">各组平均分数</div>
            <div
              class="allnav"
              id="echart5_1"
              _echarts_instance_="ec_1577239837064"
              style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
            >
              <div
                style="position: relative; overflow: hidden; width: 365px; height: 159px; padding: 0px; margin: 0px; border-width: 0px;"
              >
                <canvas
                  data-zr-dom-id="zr_0"
                  width="365"
                  height="159"
                  style="position: absolute; left: 0px; top: 0px; width: 365px; height: 159px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"
                ></canvas>
              </div>
              <div></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="back"></div>
    <div
      class="mpa-sc article-gatherer new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-article-gatherer"
    ></div>
    <div
      class="mpa-sc image-gatherer new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-image-gatherer"
    ></div>
    <div
      class="mpa-sc page-clipper new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-page-clipper"
    ></div>
    <div
      class="mpa-sc global-search new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-global-search"
    ></div>
    <div
      class="mpa-sc text-gatherer new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-text-gatherer"
    ></div>
    <div
      class="mpa-sc video-gatherer new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-video-gatherer"
    ></div>
    <div
      class="mpa-sc side-function-panel new mpa-rootsc"
      data-z="110"
      style="display: block;"
      id="mpa-rootsc-side-function-panel"
    ></div>
    <div
      class="mpa-sc notifier new mpa-rootsc"
      data-z="120"
      style="display: block;"
      id="mpa-rootsc-notifier"
    ></div>
    <div
      class="mpa-sc article-gatherer new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-article-gatherer"
    ></div>
    <div
      class="mpa-sc image-gatherer new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-image-gatherer"
    ></div>
    <div
      class="mpa-sc page-clipper new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-page-clipper"
    ></div>
    <div
      class="mpa-sc global-search new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-global-search"
    ></div>
    <div
      class="mpa-sc text-gatherer new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-text-gatherer"
    ></div>
    <div
      class="mpa-sc video-gatherer new mpa-rootsc"
      data-z="100"
      style="display: block;"
      id="mpa-rootsc-video-gatherer"
    ></div>
    <div
      class="mpa-sc side-function-panel new mpa-rootsc"
      data-z="110"
      style="display: block;"
      id="mpa-rootsc-side-function-panel"
    ></div>
    <div
      class="mpa-sc notifier new mpa-rootsc"
      data-z="120"
      style="display: block;"
      id="mpa-rootsc-notifier"
    ></div>
    <div
      class="mpa-sc notification-manager new mpa-rootsc"
      data-z="130"
      style="display: block;"
      id="mpa-rootsc-notification-manager"
    ></div>
  </div>
</template>
<script>
import { getrealdata } from "@/api/getrealdata";
export default {
  name: "realdata",
  data() {
    return {
      t: null,
      //path: "ws://127.0.0.1:8080/exam/websocket/",
      //path: "ws://111.229.86.201/exam/websocket/",
      path: "wss://www.xjtuzhangcheng.top/exam/websocket/",
      //path: "ws://49.232.160.48/exam/websocket/",
      totalnum: 128,
      submitnum: 0,
      socketname: "",
      maxscore:0,
    };
  },
  props: {},
  computed: {},
  methods: {
    initwebsocket() {
      this.socketname = Math.floor(Math.random() * 100000000) + "";
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path+this.socketname);
        // 监听socket连接
        this.socket.onopen = this.open;
        // 监听socket错误信息
        this.socket.onerror = this.error;
        // 监听socket消息
        this.socket.onmessage = this.getMessage;
      }
    },
    open: function() {
      console.log("socket连接成功");
    },
    error: function() {
      console.log("连接错误");
    },
    getMessage: function(msg) {
      var result = JSON.parse(msg.data);
      this.totalnum = result.totalperson;
      this.submitnum = result.submitperson;
      var scores=result.personscore.map(item=>item.score)
      this.maxscore=scores.reduce((a,b)=>{
        return a>b?a:b
      })
      getrealdata(result);
    },
    send: function(message) {
      var params = JSON.stringify({ join: message });
      this.socket.send(params);
    },
    timeout() {
      clearTimeout(this.t);
      var dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
      var h = dt.getHours();
      var m = dt.getMinutes();
      var s = dt.getSeconds();
      document.getElementById("showTime").innerHTML =
        y + "年" + mt + "月" + day + "日" + h + "时" + m + "分" + s + "秒";
      this.t = setTimeout(this.timeout, 1000);
    }
  },
  mounted() {
    this.initwebsocket();
    this.t = setTimeout(this.timeout, 1000);
    var clientWidth = document.body.clientWidth;
    if (!clientWidth) return;
    document.documentElement.style.fontSize = clientWidth / 32 + "px";
    /*$(window).resize(function() {
      var whei = $(window).width();
      $("html").css({ fontSize: whei / 20 });
    });*/
  }
};
</script>
<style>
@import "../assets/css/comon0.css";
</style>