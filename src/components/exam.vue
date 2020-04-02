<template>
  <div id="app">
    <div class="container">
      <form>
        <div class="col-sm-push-2 col-sm-8">
          <div align="left" style="font-size:25px;font-weight:bold;color:RGB(255,0,0);">剩余时间：{{duration}} 仅供测试</div>
          <div class="asbdy" align="left" v-for="(item ,index) in pageData" :key="index">
            <!--题干-->
            <div class="question">
              <span class="num">{{(currentPage-1)*pageSize+index+1}}、</span>
              {{item.tiMu}}
              {{itemtype[item.type]}}
              <span style="color:RGB(255,0,0)" v-if="hassubmit">正确答案:{{item.ans}}</span>
            </div>
            <!--选项-->
            <div class="anser">
              <ul>
                <li
                  class="xuanXiang"
                  v-for="(tiao,i) in item.xuanXiang"
                  :key="tiao"
                  :class="{'double-line':false}"
                >
                  <div v-if="item.type==0">
                    <input
                      type="radio"
                      v-model="item.picked_radio"
                      :name="'pickedd_' +((currentPage-1)*pageSize+index)"
                      v-bind:value="haha[i]"
                      @change="doCheck(item,((currentPage-1)*pageSize+index))"
                    />
                    {{haha[i]}} {{tiao}}
                  </div>

                  <div v-if="item.type==1">
                    <input
                      type="checkbox"
                      v-model="item.pickedMany"
                      :name="'pickedd_' +((currentPage-1)*pageSize+index)"
                      v-bind:value="haha[i]"
                      @change="doCheck(item,((currentPage-1)*pageSize+index))"
                    />
                    {{haha[i]}} {{tiao}}
                  </div>
                  <div v-if="item.type==2">
                    <input
                      type="radio"
                      v-model="item.picked_radio"
                      :name="'pickedd_' +((currentPage-1)*pageSize+index)"
                      v-bind:value="haha[i]"
                      @change="doCheck(item,((currentPage-1)*pageSize+index))"
                    />
                    {{tiao}}
                  </div>
                </li>
              </ul>
            </div>

            <div class="clearfix"></div>
          </div>
          <el-dialog
            title="提示信息"
            :visible.sync="messagevisible"
            width="30%">
            <span>{{message}}</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="messagevisible = false">取 消</el-button>
              <el-button type="primary" @click="messagevisible = false">确 定</el-button>
            </span>
          </el-dialog>
          <el-dialog
            title="已成功交卷!"
            :visible.sync="scorevisible"
            width="30%">
            <span>已提交{{submitnum}}次，您的分数{{score}}，排名{{rank}}</span>
            <router-link tag='a' :to="'/realdata'" >点击此链接观看实时比赛数据</router-link>
            <span slot="footer" class="dialog-footer">
              <el-button @click="scorevisible = false">取 消</el-button>
              <el-button type="primary" @click="scorevisible = false">确 定</el-button>
            </span>
          </el-dialog>
          <el-dialog
            title="提示"
            :visible.sync="leavevisible"
            width="30%">
            <span>已离开屏幕{{leavenum}}次</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="leavevisible = false">取 消</el-button>
              <el-button type="primary" @click="leavevisible = false">确 定</el-button>
            </span>
          </el-dialog>
          <el-dialog
            title="确定交卷"
            :visible.sync="submitvisible"
            width="30%">
            <span>{{leftnum}}是否确定交卷？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="submitvisible = false">取 消</el-button>
              <el-button type="primary" @click="submitvisible = false;submit()">确 定</el-button>
            </span>
          </el-dialog>
          <!-- 添加或修改时的弹窗 -->
          <el-dialog title="当前未完成题目" :visible.sync="visible">
            <el-form
              ref="dataForm"
              label-width="15%"
              :inline-message="true"
              style="width: 100%; padding:0 50px;"
            >
              <!-- 内容 -->
              <div class="modal-body" align="left">
                <ul class="modal-u">
                  <li v-if="!item.finish" v-for="(item,index) in questions" :key="index">
                    <span>第{{index+1}}题未完成</span>
                  </li>
                </ul>
              </div>
              <div class="clearfix"></div>
              <div class="modal-footer">
                <el-button type="primary" @click="visible=false">关闭</el-button>
                <!-- <button type="button" class="btn btn-primary saveBtn">确定</button> -->
              </div>
            </el-form>
          </el-dialog>
        </div>
        <div class="col-sm-offset-2 col-sm-8 dtbtn">
          <el-button type="primary" @click="prev">上一页</el-button>
          <el-button type="primary" @click="next">下一页</el-button>
          <el-button type="primary" @click="detail">未完成</el-button>
          <el-button type="primary" @click="submitclick" :disabled="hassubmit">提交</el-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { getquestions, checkresult } from "@/api/user";
import { setInterval, clearInterval } from "timers";
import Cookies from "js-cookie";
export default {
  name: "exam",
  data() {
    return {
      //是否已提交
      hassubmit:false,
      leftnum:"",
      submitvisible:false,
      messagevisible:false,
      message:"",
      scorevisible:false,
      leavenum: 0,
      submitnum:0,
      score:0,
      rank:-1,
      timer: null,
      totaltime: 180,
      timeleft: 0,
      leavevisible: false,
      visible: false,
      name: "exam",
      currentPage: 1, //当前第几页
      pageSize: 10, //每页显示几条数据
      judge: ["对", "错"],
      haha: ["A", "B", "C", "D"],
      itemtype: ["(单选题)", "(多选题)", "(判断题)"],
      pageData: [], //单页数据
      questions: []
    };
  },
  methods: {
    leavewindow(){
      if (sessionStorage.getItem("leavenum") === null) {
        this.leavenum=1
      }else{
        this.leavenum=parseInt(sessionStorage.getItem("leavenum"))+1;
      }
      sessionStorage.setItem("leavenum",this.leavenum)
      var $this = this;
      this.leavevisible=true
    },
    async getquestion() {
      var params = {};
      params = {
        opno: Cookies.get("opno"),
        num: "50"
      };
      //this.menus[i].children = [];
      getquestions(params).then(res => {
        this.questions = [];
        res.data.forEach(item => {
          var qus = {
            quesno: item.quesno,
            isRight: null,
            picked_radio: "",
            pickedMany: [],
            tiMu: item.content,
            xuanXiang: [item.quesa, item.quesb, item.quesc, item.quesd],
            type: item.type
          };
          if (qus.type === "2") {
            qus.xuanXiang = ["对", "错"];
          }
          this.questions.push(qus);
        });
        this.questions.forEach(item => {
          item.finish = false;
        });
        sessionStorage.setItem("initquestions", JSON.stringify(this.questions));
        this.pageData = this.questions.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
      });
    },
    detail() {
      //答题状况
      var $this = this;
      this.visible = true;
      this.questions.forEach(function(item, i) {});
    },
    submitclick(){
      var left=0
      this.questions.forEach((ques)=>{
        if(!ques.finish){
          left=left+1
        }
      })
      if(left!==0){
        this.leftnum="您剩余"+left+"道题没做,"
      }
      this.submitvisible=true
    },
    submit() {
      clearInterval(this.timer);
      //答题状况
      checkresult({ opno: Cookies.get("opno"), results: this.questions }).then(
        res => {
          if(res.data.code!==0){
            this.message=res.data.message
            this.messagevisible=true
            return
          }
          this.hassubmit=true
          sessionStorage.getItem("hassubmit", true);
          this.score=res.data.score
          this.submitnum=res.data.submitnum
          this.rank=res.data.rank
          this.scorevisible=true
          this.questions.forEach((item,index)=>{
            item.ans=res.data.rightanswers[index].ans
          })
          sessionStorage.setItem("initquestions", JSON.stringify(this.questions));
        }
      );
    },
    inittimefunction(){
      if (this.timeleft > 0) {
        this.timeleft = this.timeleft - 1;
      } else {
        clearInterval(this.timer)
        this.timeleft = 0;
        this.submit()
        window.onfocus=null
      }
    },
    reloadtimefunction(){
      if (this.timeleft > 0) {
        this.timeleft = this.timeleft - 1;
      } else {
        clearInterval(this.timer)
        this.timeleft = 0
        this.submit()
        window.onfocus=null

      }
    },
    init() {
      if (sessionStorage.getItem("hassubmit") !== null) {
        this.hassubmit=true
      }
      if(Cookies.get("opno")===undefined){
        this.$router.push({ path: this.redirect || '/login' })
      }
      window.onfocus=this.leavewindow
      if (sessionStorage.getItem("initquestions") === null) {
        this.getquestion();
      } else {
        this.questions = JSON.parse(sessionStorage.getItem("initquestions"));
        this.pageData = this.questions.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
      }
      if (sessionStorage.getItem("inittime") === null) {
        var date = new Date().getTime();
        this.timeleft = this.totaltime;
        sessionStorage.setItem("inittime", date);
        let that=this
        this.timer = setInterval(function(){that.inittimefunction()}, 1000);
      } else {
        var date = new Date().getTime();
        this.timeleft =
        this.totaltime - (date - sessionStorage.getItem("inittime")) / 1000;
        let that=this
        this.timer = setInterval(function(){that.reloadtimefunction()}, 1000);
      }
      /*this.pageData.forEach(function(item, i) {
        if (item.type == 0) {
          item.picked_radio = $this.$cookies.get(
            "pickedd_" + (($this.currentPage - 1) * $this.pageSize + i)
          );
        } else {
          if (
            JSON.parse(
              $this.$cookies.get(
                "pickedd_" + (($this.currentPage - 1) * $this.pageSize + i)
              )
            ) == null ||
            JSON.parse(
              $this.$cookies.get(
                "pickedd_" + (($this.currentPage - 1) * $this.pageSize + i)
              )
            ) == undefined
          ) {
            item.pickedMany = [];
          } else {
            item.pickedMany = JSON.parse(
              $this.$cookies.get(
                "pickedd_" + (($this.currentPage - 1) * $this.pageSize + i)
              )
            );
          }
        }
        item.isRight = this.$cookies.get(
          "isRightt_" + (($this.currentPage - 1) * $this.pageSize + i)
        );
      });*/
    },
    doCheck(item, index) {
      item.finish = true;
      sessionStorage.setItem("initquestions", JSON.stringify(this.questions));
    },
    prev() {
      //上一页
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        //this.init();
      }
      this.pageData = this.questions.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    next() {
      //下一页
      if (this.currentPage < this.allPageNum) {
        this.currentPage = this.currentPage + 1;
        //this.init();
      }
      this.pageData = this.questions.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    fomart(time) {
      var h, m, s;
      h = Math.floor(time / 3600);
      m = Math.floor((time / 60) % 60);
      s = Math.floor(time % 60);
      h < 10 ? (h = "0" + h) : (h = h);
      m < 10 ? (m = "0" + m) : (m = m);
      s < 10 ? (s = "0" + s) : (s = s);
      return h + ":" + m + ":" + s;
    }
  },
  computed: {
    allPageNum: {
      get: function() {
        return parseInt(
          (this.questions.length + this.pageSize - 1) / this.pageSize
        );
      }
    },
    duration() {
      return this.fomart(this.timeleft);
    }
  },
  destroyed() {
    sessionStorage.removeItem("initquestions");
    sessionStorage.removeItem("inittime");
    sessionStorage.removeItem("hassubmit")
    clearInterval(this.timer);
    Cookies.remove("opno");
  },
  mounted() {
    this.init();
  }
};
</script>

