<template>
  <div class="container">
    <div class="sp-container">
      <div class="sp-content">
        <div class="sp-wrap sp-left">
          <h2>
            <span class="sp-top">15大热门方向</span>
            <span class="sp-mid">400道考题</span>
            <span class="sp-bottom">机器学习、计算机视觉、数据挖掘热门方向</span>
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
            <span class="sp-bottom"> 你，准备好了吗？</span>
          </h2>
        </div>
      </div>
      <div class="sp-full">
        <h2>开始你的AI运营之光竞赛!</h2>
        <router-link to="/login">开始比赛</router-link>
        <!--a href="http://www.jsdaima.com/register/" target="_blank">开始比赛</a-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "animation",
  date() {
    return {};
  },
  mounted() {
   
  },
  methods: {}
};
</script>
<style scoped>
@import url("../assets/css/demo3.css");
@import url("../assets/css/style3.css");
</style>