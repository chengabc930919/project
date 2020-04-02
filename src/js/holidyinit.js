/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-eval */
/* eslint-disable no-mixed-spaces-and-tabs */
var cld
var lunarInfo = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
  0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0]
var Gan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
var YEAR = ''
var hldyLst = []
var currDayOrd = 0

var solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

var Zhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
var Animals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
var solarTerm = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨',
							  '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑',
							  '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至']
var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149,
							  195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350,
							  375494, 397447, 419210, 440795, 462224, 483532, 504758]
var nStr1 = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
var nStr2 = ['初', '十', '廿', '卅', '　']
var monthName = ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月']
export function holidyinit() {
  var gNum
  var i, j
  var Today = new Date()
  var tY = Today.getFullYear()
  var tM = Today.getMonth()
  var tD = Today.getDate()
  var width = '130'
  var offsetx = 2
  var offsety = 16
  var x = 0
  var y = 0
  var snow = 0
  var sw = 0
  var cnt = 0
  var dStyle
  // 一月
  for (i = 0; i < 6; i++) {
	   document.write('<tr align=center >')
	   for (j = 0; j < 7; j++) {
		  gNum = i * 7 + j
		  document.write('<td id="GD' + gNum + '" height=26 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
		  document.write(' TITLE=""> </font><br><font id="LD' + gNum + '"  style="font-size:9pt"> </font></td>')
	   }
	   document.write('</tr>')
  }
  console.log('一月')
  // 二月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 三月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 四月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 五月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 六月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 七月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 八月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 九月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 十月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 十一月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '" style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
  // 十二月
  for (i = 0; i < 6; i++) {
    document.write('<tr align=center >')
    for (j = 0; j < 7; j++) {
      gNum = i * 7 + j
      document.write('<td id="GD' + gNum + '" height=1 onMouseOver="showHand(this)"><font id="SD' + gNum + '" style="font-size:9pt" face="Arial Black"')
      // if(j === 0 || j===6) document.write(' color=red')
      // onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"
      document.write(' TITLE=""> </font><br><font id="LD' + gNum + '"  style="font-size:9pt"> </font></td>')
    }
    document.write('</tr>')
  }
}

function lYearDays(y) {
  var i; var sum = 348
  for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0
  return (sum + leapDays(y))
}

function leapDays(y) {
  if (leapMonth(y)) return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29)
  else return (0)
}

function leapMonth(y) {
  return (lunarInfo[y - 1900] & 0xf)
}

function monthDays(y, m) {
  return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29)
}

function Lunar(objDate) {
  var i; var leap = 0; var temp = 0
  var baseDate = new Date(1900, 0, 31)
  var offset = (objDate - baseDate) / 86400000

  this.dayCyl = offset + 40
  this.monCyl = 14

  for (i = 1900; i < 2050 && offset > 0; i++) {
    temp = lYearDays(i)
    offset -= temp
    this.monCyl += 12
  }

  if (offset < 0) {
    offset += temp
    i--
    this.monCyl -= 12
  }

  this.year = i
  this.yearCyl = i - 1864

  leap = leapMonth(i)
  this.isLeap = false

  for (i = 1; i < 13 && offset > 0; i++) {
    if (leap > 0 && i === (leap + 1) && this.isLeap === false) { --i; this.isLeap = true; temp = leapDays(this.year) } else { temp = monthDays(this.year, i) }

    if (this.isLeap === true && i === (leap + 1)) this.isLeap = false

    offset -= temp
    if (this.isLeap === false) this.monCyl++
  }

  if (offset === 0 && leap > 0 && i === leap + 1) {
    if (this.isLeap) { this.isLeap = false } else { this.isLeap = true; --i; --this.monCyl }
  }

  if (offset < 0) { offset += temp; --i; --this.monCyl }

  this.month = i
  this.day = offset + 1
}

function solarDays(y, m) {
  if (m === 1) { return (((y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0)) ? 29 : 28) } else { return (solarMonth[m]) }
}
function cyclical(num) {
  return (Gan[num % 10] + Zhi[num % 12])
}

function calElement(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay) {
  this.isToday = false
  this.sYear = sYear
  this.sMonth = sMonth
  this.sDay = sDay
  this.week = week
  this.lYear = lYear
  this.lMonth = lMonth
  this.lDay = lDay
  this.isLeap = isLeap
  this.cYear = cYear
  this.cMonth = cMonth
  this.cDay = cDay

  this.color = ''
	  this.className = ''

  this.lunarFestival = ''
  this.solarFestival = ''
  this.solarTerms = ''
}

function sTerm(y, n) {
  var offDate = new Date((31556925974.7 * (y - 1900) + sTermInfo[n] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
  return (offDate.getUTCDate())
}

function drawCld(SY, SM) {
  var i, sD, s, size, sObj, lObj, gObj
  cld = new calendar(SY, SM)
  for (i = 0; i < 42; i++) {
    sObj = eval('SD' + i + '[' + SM + ']')
    lObj = eval('LD' + i + '[' + SM + ']')
    gObj = eval('GD' + i + '[' + SM + ']')

    sObj.className = ''

    sD = i - cld.firstWeek

    if (sD > -1 && sD < cld.length) {
      sObj.innerHTML = sD + 1
     	 // gObj.onclick = function(){mClk(i, currDayOrd++);};
		 if (GD2[0].attachEvent === undefined) {
        eval('GD' + i + '[' + SM + '].onclick=function() {mClk(SD' + i + '[' + SM + '], ' + currDayOrd + ')}')
		 } else {
        eval('GD' + i + '[' + SM + ']' + ".attachEvent('onclick', function() {mClk(SD" + i + '[' + SM + '], ' + currDayOrd + ')})')
		 }

      // if(cld[sD].isToday) sObj.className = 'selectColor';

      sObj.style.color = cld[sD].color
      sObj.className = cld[sD].className
      if (sObj.className === 'selectColor') {
         	hldyLst[currDayOrd] = 1
      } else {
         	hldyLst[currDayOrd] = 0
      }
      currDayOrd++

      if (SY > 1900 && SY <= 2050) {
	         if (cld[sD].lDay === 1) {
	            lObj.innerHTML = '<b>' + (cld[sD].isLeap ? '闰' : '') + cld[sD].lMonth + '月' + '</b>'
	         } else {
	            lObj.innerHTML = cDay(cld[sD].lDay)
		     }
		 }
      s = cld[sD].lunarFestival
      if (s.length > 0) {
        if (s.length > 6) s = s.substr(0, 4) + '…'
        s = s.fontcolor('red')
      } else {
        s = cld[sD].solarFestival
        if (s.length > 0) {
          size = (s.charCodeAt(0) > 0 && s.charCodeAt(0) < 128) ? 8 : 4
          if (s.length > size + 2) s = s.substr(0, size) + '…'
          s = s.fontcolor('blue')
        } else {
          s = cld[sD].solarTerms
          if (s.length > 0) s = s.fontcolor('limegreen')
        }
      }
      if (s.length > 0) lObj.innerHTML = s
    } else {
      	 gObj.onmouseover = ''
      sObj.innerHTML = ''
      lObj.innerHTML = ''
    }
  }
}

function calendar(y, m) {
  var sDObj; var lDObj; var lY; var lM; var lD = 1; var lL; var lX = 0; var tmp1; var tmp2
  var lDPOS = new Array(3)
  var n = 0
  var firstLM = 0

  sDObj = new Date(y, m, 1)

  this.length = solarDays(y, m)
  this.firstWeek = sDObj.getDay()

  for (var i = 0; i < this.length; i++) {
    if (lD > lX) {
      sDObj = new Date(y, m, i + 1)
      lDObj = new Lunar(sDObj)
      lY = lDObj.year
      lM = lDObj.month
      lD = lDObj.day
      lL = lDObj.isLeap
      lX = lL ? leapDays(lY) : monthDays(lY, lM)

      if (n === 0) firstLM = lM
      lDPOS[n++] = i - lD + 1
    }

    this[i] = new calElement(y, m + 1, i + 1, nStr1[(i + this.firstWeek) % 7],
      lY, lM, lD++, lL,
      cyclical(lDObj.yearCyl), cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++))

    if ((i + this.firstWeek) % 7 === 0) { this[i].color = 'red'; this[i].className = 'selectColor' }
    if ((i + this.firstWeek) % 7 === 6) { this[i].color = 'red'; this[i].className = 'selectColor' }
  }

  tmp1 = sTerm(y, m * 2) - 1
  tmp2 = sTerm(y, m * 2 + 1) - 1
  this[tmp1].solarTerms = solarTerm[m * 2]
  this[tmp2].solarTerms = solarTerm[m * 2 + 1]
  // if(m===3) this[tmp1].color = 'red'

  if (y === tY && m === tM) this[tD - 1].isToday = true
}

function cDay(d) {
  var s

  switch (d) {
    case 10:
      s = '初十'; break
    case 20:
      s = '二十'; break
      break
    case 30:
      s = '三十'; break
      break
    default :
      s = nStr2[Math.floor(d / 10)]
      s += nStr1[d % 10]
  }
  return (s)
}
// document.onmousemove = mEvn;

function mOvr(v) {
  var s, festival
  var sObj = eval('SD' + v)
  var d = sObj.innerHTML - 1

  if (sObj.innerHTML !== '') {
    sObj.style.cursor = 'hand'

    if (cld[d].solarTerms === '' && cld[d].solarFestival === '' && cld[d].lunarFestival === '') { festival = '' } else {
      festival = '<TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR="#F4FBBD"><TR><TD>' +
         '<FONT COLOR="#000000" STYLE="font-size:9pt;">' + cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival + '</FONT></TD>' +
         '</TR></TABLE>'
    }

    s = '<TABLE WIDTH="130" BORDER=0 CELLPADDING="2" CELLSPACING=0 BGCOLOR="green"><TR><TD>' +
         '<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN="right"><FONT COLOR="#ffffff" STYLE="font-size:9pt;">' +
         cld[d].sYear + ' 年 ' + cld[d].sMonth + ' 月 ' + cld[d].sDay + ' 日<br>星期' + cld[d].week + '<br>' +
         '<font color="violet">农历' + (cld[d].isLeap ? '闰 ' : ' ') + cld[d].lMonth + ' 月 ' + cld[d].lDay + ' 日</font><br>' +
         '<font color="yellow">' + cld[d].cYear + '年 ' + cld[d].cMonth + '月 ' + cld[d].cDay + '日</font>' +
         '</FONT></TD></TR></TABLE>' + festival + '</TD></TR></TABLE>'

    document.all['detail'].innerHTML = s

   	if (snow === 0) {
      dStyle.left = x + offsetx - (width / 2)
      dStyle.top = y + offsety
   		dStyle.visibility = 'visible'
   		snow = 1
   	}
  }
}

function mOut() {
  if (cnt >= 1) { sw = 0 }
  if (sw === 0) { snow = 0;	dStyle.visibility = 'hidden' } else cnt++
}

function mClk(objName, num) {
  var obj = eval(objName)
  if (obj.className === 'selectColor') {
    obj.className = ''
    hldyLst[num] = 0
  } else {
    obj.className = 'selectColor'
    hldyLst[num] = 1
  }
  // alert(currDayOrd);
  // alert(hldyLst.toString());
}

function mEvn() {
  x = event.x
  y = event.y
  if (document.body.scrollLeft) { x = event.x + document.body.scrollLeft; y = event.y + document.body.scrollTop }
  if (snow) {
    dStyle.left = x + offsetx - (width / 2)
    dStyle.top = y + offsety
  }
}

function showHand(obj) {
  obj.style.cursor = 'hand'
}

function init() {
  // dStyle = detail.style;
  for (var i = 0; i < 12; i++) {
    drawCld(document.all.year.value, i)
  }
  document.all.watting.innerHTML = ''
}

function confirm() {
  // if (!checkAll(document.armsForm)){
  // return;
  // }

  var tmp = ''
  for (var i = 0; i < hldyLst.length; i++) {
    tmp += hldyLst[i]
  }
  document.armsForm.hldyLst.value = tmp
  armsForm.action = 'HldyAction_newHldyMnt.action'
  armsForm.submit()
}

function add() {
  var tmp = ''
  for (var i = 0; i < hldyLst.length; i++) {
    tmp += hldyLst[i]
  }
  document.armsForm.hldyLst.value = tmp
  document.armsForm.action = '<%=request.getContextPath() %>/mntparammgr/hldyAction_newHldyMnt.action'
  document.armsForm.submit()
}

function back() {
  history.go(-1)
}
