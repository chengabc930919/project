<template>
  <div>
    <h1>{{ msg }}</h1>
    <table>
	<tr>
		<td id="watting">正在生成日历并初始化节假日，请稍等...</td>
	</tr>
</table>
<table width="711" border="0" cellspacing="0" cellpadding="0">
	<tr>
		<td valign="top">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td class="title">节假日维护</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
		</table>
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td valign="top" bgcolor="#000000">
				<table width="100%" border="0" cellpadding="0" cellspacing="1"
					bordercolor="#000000">
					<tr>
						<td colspan="4" class="tableTitle1"></td>
					</tr>
					<tr class="style">
						<td colspan="4" align="center" bgcolor="#FFFFFF">
						<table width="100%" border="0" cellpadding="0" cellspacing="4"
							class="style">
							<tr>
								<td colspan="4">&nbsp;</td>
							</tr>
							<tr>
								
								<td  align="right">年份:&nbsp;</td>
								<td ><input type="text"  :value="year" disabled>
								</td>
								<td  align="right">网点机构号:&nbsp;</td>
								<td><input type="text"  :value="orgno" disabled>
								</td>
							</tr>
							<tr>
								<td height="4" colspan="4"></td>
							</tr>
							<td colspan="4">
							<table width="230" border="0" align="left" cellpadding="2">
								<tr>
									<td colspan="3" align="center"><FONT color="#FF0000"
										size=4><B>{{year}}年</B></FONT></td>
								</tr>
								<tr>
									<td>
									<TABLE border=1 height=283 width=230 cellSpacing=0
										cellPadding=0 borderColorDark=#ffffff borderColorLight=#717171>
										<TBODY>
											<TR>
												<TD valign="top" align="center"><FONT size=3><B>1月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[0]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
									<td valign="top">
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>2月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
                          <TBODY v-html='month[1]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>3月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[2]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
								</tr>
								<tr>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>4月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[3]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>5月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[4]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>6月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[5]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
								</tr>
								<tr>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>7月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[6]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>8月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[7]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>9月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[8]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
								</tr>
								<tr>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>10月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[9]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>11月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[10]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
									<td>
									<TABLE height=283 cellSpacing=0 borderColorDark=#ffffff
										cellPadding=0 width=230 borderColorLight=#717171 border=1>
										<TBODY>
											<TR>
												<TD valign="top" align="center" width=230><FONT size=3><B>12月
												</B></FONT>
												<TABLE width=230 border=0 cellpadding="2" cellspacing="0">
													<TBODY v-html='month[11]'/>
												</TABLE>
												</TD>
											</TR>
										</TBODY>
									</TABLE>
									</td>
								</tr>
							</table>
							</td>

						</table>
						</td>
					</tr>
				</table>
				<table width="100%" border="0" cellpadding="0" cellspacing="0"
					bgcolor="#FFFFFF">
					<tr>
						<td height="40">
						
						<input type=button class="ptx_button" value="提交" onclick="confirm()">
						<input type=button class="ptx_button" value="返回" onclick="back()">
						
						</td>
					</tr>
				</table>
				</td>
			</tr>
		</table>
		</td>
	</tr>
</table>
  </div>
</template>

<script>
var YEAR = "";
var hldyLst = new Array();
var currDayOrd = 0;
var lunarInfo = new Array(
  0x04bd8,
  0x04ae0,
  0x0a570,
  0x054d5,
  0x0d260,
  0x0d950,
  0x16554,
  0x056a0,
  0x09ad0,
  0x055d2,
  0x04ae0,
  0x0a5b6,
  0x0a4d0,
  0x0d250,
  0x1d255,
  0x0b540,
  0x0d6a0,
  0x0ada2,
  0x095b0,
  0x14977,
  0x04970,
  0x0a4b0,
  0x0b4b5,
  0x06a50,
  0x06d40,
  0x1ab54,
  0x02b60,
  0x09570,
  0x052f2,
  0x04970,
  0x06566,
  0x0d4a0,
  0x0ea50,
  0x06e95,
  0x05ad0,
  0x02b60,
  0x186e3,
  0x092e0,
  0x1c8d7,
  0x0c950,
  0x0d4a0,
  0x1d8a6,
  0x0b550,
  0x056a0,
  0x1a5b4,
  0x025d0,
  0x092d0,
  0x0d2b2,
  0x0a950,
  0x0b557,
  0x06ca0,
  0x0b550,
  0x15355,
  0x04da0,
  0x0a5d0,
  0x14573,
  0x052d0,
  0x0a9a8,
  0x0e950,
  0x06aa0,
  0x0aea6,
  0x0ab50,
  0x04b60,
  0x0aae4,
  0x0a570,
  0x05260,
  0x0f263,
  0x0d950,
  0x05b57,
  0x056a0,
  0x096d0,
  0x04dd5,
  0x04ad0,
  0x0a4d0,
  0x0d4d4,
  0x0d250,
  0x0d558,
  0x0b540,
  0x0b5a0,
  0x195a6,
  0x095b0,
  0x049b0,
  0x0a974,
  0x0a4b0,
  0x0b27a,
  0x06a50,
  0x06d40,
  0x0af46,
  0x0ab60,
  0x09570,
  0x04af5,
  0x04970,
  0x064b0,
  0x074a3,
  0x0ea50,
  0x06b58,
  0x055c0,
  0x0ab60,
  0x096d5,
  0x092e0,
  0x0c960,
  0x0d954,
  0x0d4a0,
  0x0da50,
  0x07552,
  0x056a0,
  0x0abb7,
  0x025d0,
  0x092d0,
  0x0cab5,
  0x0a950,
  0x0b4a0,
  0x0baa4,
  0x0ad50,
  0x055d9,
  0x04ba0,
  0x0a5b0,
  0x15176,
  0x052b0,
  0x0a930,
  0x07954,
  0x06aa0,
  0x0ad50,
  0x05b52,
  0x04b60,
  0x0a6e6,
  0x0a4e0,
  0x0d260,
  0x0ea65,
  0x0d530,
  0x05aa0,
  0x076a3,
  0x096d0,
  0x04bd7,
  0x04ad0,
  0x0a4d0,
  0x1d0b6,
  0x0d250,
  0x0d520,
  0x0dd45,
  0x0b5a0,
  0x056d0,
  0x055b2,
  0x049b0,
  0x0a577,
  0x0a4b0,
  0x0aa50,
  0x1b255,
  0x06d20,
  0x0ada0
);
var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
var Zhi = new Array(
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥"
);
var Animals = new Array(
  "鼠",
  "牛",
  "虎",
  "兔",
  "龙",
  "蛇",
  "马",
  "羊",
  "猴",
  "鸡",
  "狗",
  "猪"
);
var solarTerm = new Array(
  "小寒",
  "大寒",
  "立春",
  "雨水",
  "惊蛰",
  "春分",
  "清明",
  "谷雨",
  "立夏",
  "小满",
  "芒种",
  "夏至",
  "小暑",
  "大暑",
  "立秋",
  "处暑",
  "白露",
  "秋分",
  "寒露",
  "霜降",
  "立冬",
  "小雪",
  "大雪",
  "冬至"
);
var sTermInfo = new Array(
  0,
  21208,
  42467,
  63836,
  85337,
  107014,
  128867,
  150921,
  173149,
  195551,
  218072,
  240693,
  263343,
  285989,
  308563,
  331033,
  353350,
  375494,
  397447,
  419210,
  440795,
  462224,
  483532,
  504758
);
var nStr1 = new Array(
  "日",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十"
);
var nStr2 = new Array("初", "十", "廿", "卅", "　");
var monthName = new Array(
  "1 月",
  "2 月",
  "3 月",
  "4 月",
  "5 月",
  "6 月",
  "7 月",
  "8 月",
  "9 月",
  "10 月",
  "11 月",
  "12 月"
)
var cld
var Today = new Date();
var tY = Today.getFullYear()
var tM = Today.getMonth()
var tD = Today.getDate()

var width = "130"
var offsetx = 2
var offsety = 16

var x = 0
var y = 0
var snow = 0
var sw = 0
var cnt = 0
var dStyle
export default {
  name: "HelloWorld",
  data() {
    return {
      year: "2020",
      orgno: "000000",
      msg: "Welcome to COMAP",
      month: [],
    };
  },
  methods: {
    mOut() {
      if (cnt >= 1) {
        sw = 0;
      }
      if (sw == 0) {
        snow = 0;
        dStyle.visibility = "hidden";
      } else cnt++;
    },

    mClk(objName, num) {
      var obj = eval(objName);
      if (obj.className == "selectColor") {
        obj.className = "";
        hldyLst[num] = 0;
      } else {
        obj.className = "selectColor";
        hldyLst[num] = 1;
      }
      //alert(currDayOrd);
      //alert(hldyLst.toString());
    },

    mEvn() {
      x = event.x;
      y = event.y;
      if (document.body.scrollLeft) {
        x = event.x + document.body.scrollLeft;
        y = event.y + document.body.scrollTop;
      }
      if (snow) {
        dStyle.left = x + offsetx - width / 2;
        dStyle.top = y + offsety;
      }
    },

    showHand() {
      obj.style.cursor = "hand";
    },
    lYearDays(y) {
      var i,
        sum = 348;
      for (i = 0x8000; i > 0x8; i >>= 1) sum += lunarInfo[y - 1900] & i ? 1 : 0;
      return sum + this.leapDays(y);
    },
    leapMonth(y) {
      return lunarInfo[y - 1900] & 0xf;
    },
    leapDays(y) {
      if (this.leapMonth(y)) return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
      else return 0;
    },
    monthDays(y, m) {
      return lunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
    },

    Lunar(objDate) {
      var result={}
      var i,
        leap = 0,
        temp = 0;
      var baseDate = new Date(1900, 0, 31);
      var offset = (objDate - baseDate) / 86400000;

      result.dayCyl = offset + 40;
      result.monCyl = 14;

      for (i = 1900; i < 2050 && offset > 0; i++) {
        temp = this.lYearDays(i);
        offset -= temp;
        result.monCyl += 12;
      }

      if (offset < 0) {
        offset += temp;
        i--;
        result.monCyl -= 12;
      }

      result.year = i;
      result.yearCyl = i - 1864;

      leap = this.leapMonth(i);
      result.isLeap = false;

      for (i = 1; i < 13 && offset > 0; i++) {
        if (leap > 0 && i == leap + 1 && result.isLeap == false) {
          --i;
          result.isLeap = true;
          temp = this.leapDays(result.year);
        } else {
          temp = this.monthDays(result.year, i);
        }

        if (result.isLeap == true && i == leap + 1) result.isLeap = false;

        offset -= temp;
        if (result.isLeap == false) result.monCyl++;
      }

      if (offset == 0 && leap > 0 && i == leap + 1)
        if (result.isLeap) {
          result.isLeap = false;
        } else {
          result.isLeap = true;
          --i;
          --result.monCyl;
        }

      if (offset < 0) {
        offset += temp;
        --i;
        --result.monCyl;
      }

      result.month = i;
      result.day = offset + 1;
      return result;
    },

    solarDays(y, m) {
      if (m == 1) return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
      else return solarMonth[m];
    },
    cyclical(num) {
      return Gan[num % 10] + Zhi[num % 12];
    },

    calElement(
      sYear,
      sMonth,
      sDay,
      week,
      lYear,
      lMonth,
      lDay,
      isLeap,
      cYear,
      cMonth,
      cDay
    ) {
      var result={}
      result.isToday = false;
      result.sYear = sYear;
      result.sMonth = sMonth;
      result.sDay = sDay;
      result.week = week;
      result.lYear = lYear;
      result.lMonth = lMonth;
      result.lDay = lDay;
      result.isLeap = isLeap;
      result.cYear = cYear;
      result.cMonth = cMonth;
      result.cDay = cDay;

      result.color = "";
      result.className = "";

      result.lunarFestival = "";
      result.solarFestival = "";
      result.solarTerms = "";
      return result;
    },

    sTerm(y, n) {
      var offDate = new Date(
        31556925974.7 * (y - 1900) +
          sTermInfo[n] * 60000 +
          Date.UTC(1900, 0, 6, 2, 5)
      );
      return offDate.getUTCDate();
    },

    drawCld(SY, SM) {
      var i, sD, s, size;
      cld = this.calendar(SY, SM);
      for (i = 0; i < 42; i++) {
        var sObj=eval("document.getElementsByName('SD" + i + "')")[SM];
        var lObj=eval("document.getElementsByName('LD" + i + "')")[SM];
        var gObj=eval("document.getElementsByName('GD" + i + "')")[SM];

        sObj.className = "";

        sD = i - cld.firstWeek;

        if (sD > -1 && sD < cld.length) {
          sObj.innerHTML = sD + 1; 
          sObj.onclick=function (){  
            //var obj=eval("document.getElementsByName('SD" + i + "')")[SM];
            if (this.className == "selectColor") {
              this.className = "";
              hldyLst[this.day] = 0;
            } else {
              this.className = "selectColor";
              hldyLst[this.day] = 1;
            }
            console.log(this.day)
            console.log(hldyLst)
          }
          //gObj.addEventListener('onclick', function() {this.mClk(sObj, 0)})
          //gObj.onclick = function(){mClk(i, currDayOrd++);};
          /*
          eval(
            "GD" +
              i +
              "[" +
              SM +
              "]" +
              ".attachEvent('onclick', function() {mClk(SD" +
              i +
              "[" +
              SM +
              "], " +
              currDayOrd +
              ")})"
          );*/

          //if(cld[sD].isToday) sObj.className = 'selectColor';
          sObj.day=currDayOrd
          sObj.style.color = cld.result[sD].color;
          sObj.className = cld.result[sD].className;
          if (sObj.className == "selectColor") {
            hldyLst[currDayOrd] = 1;
          } else {
            hldyLst[currDayOrd] = 0;
          }
          currDayOrd++;

          if (SY > 1900 && SY <= 2050) {
            if (cld.result[sD].lDay == 1) {
              lObj.innerHTML =
                "<b>" +
                (cld.result[sD].isLeap ? "闰" : "") +
                cld.result[sD].lMonth +
                "月" +
                "</b>";
            } else {
              lObj.innerHTML = this.cDay(parseInt(cld.result[sD].lDay))
            }
          }
          s = cld.result[sD].lunarFestival;
          if (s.length > 0) {
            if (s.length > 6) s = s.substr(0, 4) + "…";
            s = s.fontcolor("red");
          } else {
            s = cld.result[sD].solarFestival;
            if (s.length > 0) {
              size = s.charCodeAt(0) > 0 && s.charCodeAt(0) < 128 ? 8 : 4;
              if (s.length > size + 2) s = s.substr(0, size) + "…";
              s = s.fontcolor("blue");
            } else {
              s = cld.result[sD].solarTerms;
              if (s.length > 0) s = s.fontcolor("limegreen");
            }
          }
          if (s.length > 0) lObj.innerHTML = s;
        } else {
          gObj.onmouseover = "";
          sObj.innerHTML = "";
          lObj.innerHTML = "";
        }
      }
    },
    calendar(y, m) {
      var result=[]
      var returnresult={}
      var sDObj,
        lDObj,
        lY,
        lM,
        lD = 1,
        lL,
        lX = 0,
        tmp1,
        tmp2;
      var lDPOS = new Array(3);
      var n = 0;
      var firstLM = 0;

      sDObj = new Date(y, m, 1);
      returnresult.length = this.solarDays(y, m);
      returnresult.firstWeek = sDObj.getDay();

      for (var i = 0; i < returnresult.length; i++) {
        if (lD > lX) {
          sDObj = new Date(y, m, i + 1);
          lDObj = this.Lunar(sDObj);
          lY = lDObj.year;
          lM = lDObj.month;
          lD = lDObj.day;
          lL = lDObj.isLeap;
          lX = lL ? this.leapDays(lY) : this.monthDays(lY, lM);

          if (n == 0) firstLM = lM;
          lDPOS[n++] = i - lD + 1;
        }

        result[i] = this.calElement(
          y,
          m + 1,
          i + 1,
          nStr1[(i + returnresult.firstWeek) % 7],
          lY,
          lM,
          lD++,
          lL,
          this.cyclical(lDObj.yearCyl),
          this.cyclical(lDObj.monCyl),
          this.cyclical(lDObj.dayCyl++)
        );
        if ((i + returnresult.firstWeek) % 7 == 0) {
          result[i].color = "red";
          result[i].className = "selectColor";
        }
        if ((i + returnresult.firstWeek) % 7 == 6) {
          result[i].color = "red";
          result[i].className = "selectColor";
        }
      }

      tmp1 = this.sTerm(y, m * 2) - 1;
      tmp2 = this.sTerm(y, m * 2 + 1) - 1;
      result[tmp1].solarTerms = solarTerm[m * 2];
      result[tmp2].solarTerms = solarTerm[m * 2 + 1];
      //if(m==3) this[tmp1].color = 'red'

      if (y == tY && m == tM) result[tD - 1].isToday = true;
      returnresult.result=result
      return returnresult
    },

    cDay(d) {
      var s;

      switch (d) {
        case 10:
          s = "初十";
          break;
        case 20:
          s = "二十";
          break;
          break;
        case 30:
          s = "三十";
          break;
          break;
        default:
          s = nStr2[Math.floor(d / 10)];
          s += nStr1[d % 10];
      }
      return s;
    },

    
    //document.onmousemove = mEvn;

    mOvr(v) {
      var s, festival;
      var sObj = eval("SD" + v);
      var d = sObj.innerHTML - 1;

      if (sObj.innerHTML != "") {
        sObj.style.cursor = "hand";

        if (
          cld[d].solarTerms == "" &&
          cld[d].solarFestival == "" &&
          cld[d].lunarFestival == ""
        )
          festival = "";
        else
          festival =
            '<TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR="#F4FBBD"><TR><TD>' +
            '<FONT COLOR="#000000" STYLE="font-size:9pt;">' +
            cld[d].solarTerms +
            " " +
            cld[d].solarFestival +
            " " +
            cld[d].lunarFestival +
            "</FONT></TD>" +
            "</TR></TABLE>";

        s =
          '<TABLE WIDTH="130" BORDER=0 CELLPADDING="2" CELLSPACING=0 BGCOLOR="green"><TR><TD>' +
          '<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN="right"><FONT COLOR="#ffffff" STYLE="font-size:9pt;">' +
          cld[d].sYear +
          " 年 " +
          cld[d].sMonth +
          " 月 " +
          cld[d].sDay +
          " 日星期" +
          cld[d].week +
          "" +
          '<font color="violet">农历' +
          (cld[d].isLeap ? "闰 " : " ") +
          cld[d].lMonth +
          " 月 " +
          cld[d].lDay +
          " 日</font>" +
          '<font color="yellow">' +
          cld[d].cYear +
          "年 " +
          cld[d].cMonth +
          "月 " +
          cld[d].cDay +
          "日</font>" +
          "</FONT></TD></TR></TABLE>" +
          festival +
          "</TD></TR></TABLE>";

        document.all["detail"].innerHTML = s;

        if (snow == 0) {
          dStyle.left = x + offsetx - width / 2;
          dStyle.top = y + offsety;
          dStyle.visibility = "visible";
          snow = 1;
        }
      }
    },

    init() {
      //dStyle = detail.style;
      for (var i = 0; i < 12; i++) {
        this.drawCld('2020', i);
      }
      document.all.watting.innerHTML = "";
    },

    confirm() {
      //if (!checkAll(document.armsForm)){
      //return;
      //}

      var tmp = "";
      for (var i = 0; i < hldyLst.length; i++) {
        tmp += hldyLst[i];
      }
      document.armsForm.hldyLst.value = tmp;
      armsForm.action = "HldyAction_newHldyMnt.action";
      armsForm.submit();
    },

    add() {
      var tmp = "";
      for (var i = 0; i < hldyLst.length; i++) {
        tmp += hldyLst[i];
      }
      document.armsForm.hldyLst.value = tmp;
      cocument.armsForm.action =
        "<%=request.getContextPath() %>/mntparammgr/hldyAction_newHldyMnt.action";
      document.armsForm.submit();
    },

    back() {
      history.go(-1);
    },
  },
  created: function(){
    var gNum 
    var content=''
    content=content+'<TR align=middle bgColor=#e8e8e8><TD width=50 height=1>日</TD><TD width=50 height=1>一</TD><TD width=50 height=1>二</TD>'
    content=content+'<TD width=50 height=1>三</TD><TD width=50 height=1>四</TD><TD width=50 height=1>五</TD><TD width=50 height=1>六</TD></TR>'
    for(var i=0;i<6;i++) { 
        content=content+'<tr align=center>'
        for(var j=0;j<7;j++) { 
        gNum = i*7+j 
        content=content+'<td name="GD' + gNum +'" height=26"' +  ' style="cursor:pointer"><font name="SD' + gNum +'" style="font-size:9pt" face="Arial Black"'
        content=content+' TITLE=""> </font>\n<font name="LD' + gNum + '"  style="font-size:9pt"> </font></td>' 
        } 
        content=content+'</tr>'
    } 
    for(var k=0;k<12;k++) {
      this.month.push(content);
    }
  },
  mounted: function(){
    this.init()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.selectColor {
	BACKGROUND-COLOR: #006DC1;
	color: #ffFF00;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
