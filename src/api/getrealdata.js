import { getdata } from '@/api/acquire'
import echarts from 'echarts'
import { diff } from 'semver';
var clientWidth = document.body.clientWidth;
var basicsize=clientWidth / 32
var colorlist = ["#00C78C", "#DA70D6", "#FF7D40", "#00FF7F", "#FFDEAD", "#FF00FF", "#FFFFCD", "#FFFF00", "#00FFFF", "#708069", "#7FFF00", "#FF0000", "#FFC0CB", "#FAA755", "#00FF00"]
export async function getrealdata(data) {
    echarts_1(data.quesnum);
    //echarts_2(data.diffnum);
    echarts_5(data.groupnum,data.unsubmitperson);
    echarts_4(data.timedata);
    echarts_5_1(data.groupscore);
    echarts_31(data.rightnum);
    echarts_32(data.rightnum);
    echarts_33(data.rightnum);
    echarts_34(data.rightnum);
    echarts_35(data.rightnum);
    echarts_36(data.rightnum);
    echarts_37(data.rightnum);
    echarts_38(data.rightnum);
    echarts_rank(data.personscore);
}
export function echarts_1(data1) {
    // 基于准备好的dom，初始化echarts实例
    var seriesdata = []
    data1.sort(function (a, b) {
        if (a.countnum < b.countnum) {
            return 1;
        } else if (a.countnum == b.countnum) {
            return 0;
        } else {
            return -1;
        }
    });    
    data1.forEach((element, index) => {
        seriesdata.push({
            name: element.questype,
            value: element.countnum,
            itemStyle: {
                normal: {
                    color: colorlist[index]
                }
            }
        })
    });
    var myChart = echarts.init(document.getElementById('echart1'));
    var option = {
        animation: false, //动画效果加载和删除
        legend: {
            show:false,
            orient: "vertical",
            x: "left",
            data: data1.map(v => v.questype),
            textStyle: {
                fontSize:"0.5rem",
                color: "#1afffd"
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a}\n{b}:{c}({d}%)"
        },
        calculable: false,
        series: {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "40%"],
            itemStyle:{
                normal:{
                    labelLine:{
                        length:0
                    }
                }
            },
            label: {
                normal: {
                    show: true, 
                    formatter: "{a} \n{b} : {c} ({d}%)",
                    textStyle : {
                        fontSize : basicsize*0.2,
                        fontWeight:'Bold'    //文字的字体大小
                    }
                }
            },
            data: seriesdata
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_2(data2) {
    //data2.splice(6)
    var seriesdata = []
    var easydata = []
    var middledata = []
    var diffdata = []
    var placeHoledStyle = {
        normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
        },
        emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
        }
    }
    var dataStyle = {
        normal: {
            label: {
                show: true,
                position: 'insideLeft',
                formatter: '{c}道'
            }
        }
    }
    data2.forEach((element, index) => {
        var diffstr = element.difficulty.split(',')
        if (diffstr.length === 3) {
            easydata.push(parseInt(diffstr[1]))
            middledata.push(parseInt(diffstr[0]))
            diffdata.push(parseInt(diffstr[2]))
        }
        if (diffstr.length === 2) {
            easydata.push(parseInt(diffstr[1]))
            middledata.push(parseInt(diffstr[0]))
            diffdata.push(0)
        }
        if (diffstr.length === 1) {
            easydata.push(parseInt(diffstr[0]))
            middledata.push(0)
            diffdata.push(0)
        }
    })
    seriesdata.push({
        name: '易',
        type: 'bar',
        stack: '题量',
        itemStyle: dataStyle,
        data: easydata,
        itemStyle: {
            color: colorlist[0],
            fontSize:basicsize*0.2
        }
    })
    seriesdata.push({
        name: '中',
        type: 'bar',
        stack: '题量',
        itemStyle: placeHoledStyle,
        data: middledata,
        itemStyle: {
            color: colorlist[1],
            fontSize:basicsize*0.2
        }
    })
    seriesdata.push({
        name: '难',
        type: 'bar',
        stack: '题量',
        itemStyle: placeHoledStyle,
        data: diffdata,
        itemStyle: {
            color: colorlist[2],
            fontSize:basicsize*0.2
        }
    })
    var myChart = echarts.init(document.getElementById('echart2'));
    var option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: '{b}<br/>{a0}:{c0}道<br/>{a1}:{c1}道<br/>{a2}:{c2}道'
        },
        legend: {
            x: basicsize*5,
            y: 0,
            data: ['易', '中', '难'],
            textStyle: {
                color: '#fff',
                fontSize:basicsize*0.3
            }
        },

        grid: {
            x:basicsize*2,
            y:basicsize*0.5,
        },
        xAxis: [
            {
                type: 'value',
                position: 'top',
                splitLine: { show: false },
                axisLabel: { show: false }
            }
        ],
        yAxis: [
            {
                type: 'category',
                splitLine: { show: false },
                axisLabel: {

                    textStyle: {
                        color: '#fff',
                        align: 'right',
                        fontSize:basicsize*0.2
                    }
                },
                data: data2.map(v => v.questype)
            }
        ],
        series: seriesdata
    }
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_5(data5,data7) {
    var groupname= ['集中作业组','运营协同组','支付清算组','金融工程组','资产负债组','运营业务组']
    var data6=[]
    groupname.forEach(item=>{
        data6.push(data5.find(element=>{
            return element.groupname===item
        }))
    })
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (a) {
                var percent=data5.filter(item=>item.groupname===a[0].name)
                var unsubmit=data7.filter(item=>item.groupname===a[0].name)
                var result=["总人数:"+percent[0].totalnum+"  未提交人数:"+(percent[0].totalnum-percent[0].submitnum)]
                unsubmit.forEach(item=>{
                    result.push(item.mingzi)
                })
                /*return '姓名:&#32张程<br/>'
                +'层级:&#32总行<br/>'
                +'职务:&#32管理员<br/>'
                +'角色:&#32系统管理员<br/>'
                +'&#8195&#8195&#8194&#8197核查员<br/>'
                +'&#8195&#8195&#8194&#8197核查员<br/>'
                +'&#8195&#8195&#8194&#8197核查员<br/>'*/
                return result.join("<br/>")
            }
        },
        // legend: {
        //    data:['散客（万人）','团队（万人）'],
        //    y:'20',
        //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
        // },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: data6.map(v => v.groupname),
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255)",
                        fontSize: basicsize*0.25,
                        fontWeight:'Bold'
                    },
                },
            }
        ],
        grid: {
            x: 46,
            y: 30,
            x2: 32,
            y2: '20%',
            borderWidth: 0
        },
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                min:0,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        fontSize:basicsize*0.25,
                    }
                }
            }
        ],
        series: [
            {
                name: '提交百分比',
                type: 'bar',
                stack: '提交百分比',
                //barWidth: '30',
                data: data6.map(v => v.submitnum/v.totalnum),
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ["#37A2DA", "#37A2DA", "#FF7D40", "#FF7D40", "#00C78C", "#FFDEAD", "#FFDEAD",
                            ];
                            return colorList[params.dataIndex]
                        },
    　　　　　　　　　　　　　　//以下为是否显示，显示位置和显示格式的设置了
                        label: {
                            show: true,
                            position: 'top',
                            fontSize: 0.25*basicsize,
                            formatter: function(c){
                                return Math.ceil(c.value*100)+'%'
                            }
                        }
                    },
                },
            },
            /*{
                name: '总人数',
                type: 'bar',
                stack: '广告',
                barWidth: '30',
                data: data6.map(v => v.totalnum),
                itemStyle: {
                    normal: {
                        color: '#1afffd',
                        fontSize:basicsize*0.2,
                    }
                }
            },
            {
                name: '提交人数',
                type: 'bar',
                stack: '广告',
                data: data6.map(v => v.submitnum),
                itemStyle: {
                    normal: {
                        color: '#2e7cff',
                        fontSize:basicsize*0.2,
                    }
                }
            }*/
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//add new echart chat
export function echarts_5_1(data5) {
    var groupname= ['集中作业组','运营协同组','支付清算组','金融工程组','资产负债组','运营业务组']
    var data6=[]
    groupname.forEach(item=>{
        data6.push(data5.find(element=>{
            return element.groupname===item
        }))
    })
    var scores=data6.map(item=>item.score)
    var maxscore=scores.reduce((a,b)=>{
        return a>b?a:b
    })
    if(maxscore===0){
        maxscore=0.1
    }
    var topscore=Math.ceil(maxscore+0.2*maxscore+1)
    var pos1=Math.max(scores[0],scores[1])/topscore*100+15+'%'
    var pos2=Math.max(scores[2],scores[3])/topscore*100+15+'%'
    var pos3=Math.max(scores[4])/topscore*100+15+'%'
    var pos4=Math.max(scores[5],scores[6])/topscore*100+15+'%'
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5_1'));

    var option = {
        grid: {
            x: 46,
            y: '10%',
            x2: 32,
            y2: '20%',
            borderWidth: 0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        calculable : true,
        /*graphic: [
             {
                type: 'group',
                left: '18%',
                bottom:pos1,
                children: [
                    {
                        type: 'text',
                        z: 100,
                        left: 'center',
                        top: 'middle',
                        style: {
                            fill: '#37A2DA',
                            text: [
                                '一支部'
                            ],
                            textFont: '14px Microsoft YaHei bold'
                        }
                    }
                ]
            },
            {
                type: 'group',
                left: '48%',
                bottom:pos2,
                children: [
                    {
                        type: 'text',
                        z: 100,
                        left: 'center',
                        top: 'middle',
                        style: {
                            fill: '#FF7D40',
                            text: [
                                '二支部'
                            ],
                            textFont: '14px Microsoft YaHei bold'
                        }
                    }
                ]
            },
            {
                type: 'group',
                left: '59%',
                bottom:pos3,
                children: [
                    {
                        type: 'text',
                        z: 100,
                        left: 'center',
                        top: 'middle',
                        style: {
                            fill: '#00C78C',
                            text: [
                                '三支部'
                            ],
                            textFont: '14px Microsoft YaHei bold'
                        }
                    }
                ]
            },
            {
                type: 'group',
                left: '77%',
                bottom:pos4,
                children: [
                    {
                        type: 'text',
                        z: 100,
                        left: 'center',
                        top: 'middle',
                        style: {
                            fill: '#FFDEAD',
                            text: [
                                '四支部'
                            ],
                            textFont: '14px Microsoft YaHei bold'
                        }
                    }
                ]
            }
        ],*/
        xAxis : [
            {
                type : 'category',
                data : groupname,
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255)",
                        fontSize: basicsize*0.25,
                        fontWeight:'Bold'
                    },
                },
            }
        ],
        yAxis : [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                min:0,
                max:topscore,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        fontSize:basicsize*0.25,
                    }
                }
            }
        ],
        series : [
            {
                name:'分值',
                type:'bar',
                data:data6.map(item=>{
                    return item.score
                }),
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ["#37A2DA", "#37A2DA", "#FF7D40", "#FF7D40", "#00C78C", "#FFDEAD", "#FFDEAD",
                            ];
                            return colorList[params.dataIndex]
                        },
    　　　　　　　　　　　　　　//以下为是否显示，显示位置和显示格式的设置了
                        label: {
                            show: true,
                            position: 'top',
                            fontSize: 0.25*basicsize,
                            formatter: function(c){
                                return c.value.toFixed(2)
                            }
                        }
                    },
                },
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

export function echarts_4(data4) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart4'));

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#dddc6b'
                }
            }
        },
        legend: {
            top: '0%',
            //data:['安卓','IOS'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2,
            }
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10%',
            containLabel: true
        },

        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,1)",
                    fontSize:basicsize*0.25,
                    fontWeight:'bold'
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                }

            },

            //data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
            data: data4.map(v=>v.timenow)
        }, {

            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,



        }],

        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: basicsize*0.25,
                },
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [
            {
                name: '登录人数',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {

                    normal: {
                        color: '#d5110d',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(1, 132, 213, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(1, 132, 213, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#d5110d',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                //data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4,3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]
                data: data4.map(v=>v.loginnum)

            },
            {
                name: '提交人数',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {

                    normal: {
                        color: '#d8c812',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 216, 135, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0, 216, 135, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#d8c812',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                //data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]
                data: data4.map(v=>v.submitnum)

            }
        ]

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    //var myChart = echarts.init(document.getElementById('echart6'));

    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            //shadowBlur: 40,
            //shadowColor: 'rgba(40, 40, 40, 1)',
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(255,255,255,.05)',
            label: { show: false, },
            labelLine: { show: false }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var option = {
        color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
        tooltip: {
            show: true,
            formatter: "{a} : {c} "
        },
        legend: {
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 12,
            bottom: '3%',

            data: ['浙江', '上海', '广东', '北京', '深圳'],
            textStyle: {
                color: 'rgba(255,255,255,.6)',
            }
        },

        series: [
            {
                name: '浙江',
                type: 'pie',
                clockWise: false,
                center: ['50%', '42%'],
                radius: ['59%', '70%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                data: [{
                    value: 80,
                    name: '01'
                }, {
                    value: 20,
                    name: 'invisible',
                    tooltip: { show: false },
                    itemStyle: placeHolderStyle
                }]
            },
            {
                name: '上海',
                type: 'pie',
                clockWise: false,
                center: ['50%', '42%'],
                radius: ['49%', '60%'],
                itemStyle: dataStyle,
                hoverAnimation: false,
                data: [{
                    value: 70,
                    name: '02'
                }, {
                    value: 30,
                    name: 'invisible',
                    tooltip: { show: false },
                    itemStyle: placeHolderStyle
                }]
            },
            {
                name: '广东',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                center: ['50%', '42%'],
                radius: ['39%', '50%'],
                itemStyle: dataStyle,
                data: [{
                    value: 65,
                    name: '03'
                }, {
                    value: 35,
                    name: 'invisible',
                    tooltip: { show: false },
                    itemStyle: placeHolderStyle
                }]
            },
            {
                name: '北京',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                center: ['50%', '42%'],
                radius: ['29%', '40%'],
                itemStyle: dataStyle,
                data: [{
                    value: 60,
                    name: '04'
                }, {
                    value: 40,
                    name: 'invisible',
                    tooltip: { show: false },
                    itemStyle: placeHolderStyle
                }]
            },
            {
                name: '深圳',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                center: ['50%', '42%'],
                radius: ['20%', '30%'],
                itemStyle: dataStyle,
                data: [{
                    value: 50,
                    name: '05'
                }, {
                    value: 50,
                    name: 'invisible',
                    tooltip: { show: false },
                    itemStyle: placeHolderStyle
                }]
            },]
    };

    // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
    // window.addEventListener("resize",function(){
    //     myChart.resize();
    // });
}
export function echarts_31(data3) {
    var seriesdata = []
    var machinedata = data3.filter(function (item) {
        return item.questype == '机器学习'
    }
    )
    machinedata.forEach((element, index) => {
        seriesdata.push({
            name: element.questype,
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#1E90FF', '#FFDEAD'],
            label: { show: true },
            labelLine: { show: false },
            data: [{
                value: element.rightnum, name: '正确'
            },
            {
                value: element.falsenum, name: '错误'
            }
            ]
        })
    })
    var myChart = echarts.init(document.getElementById('fb1'));
    var option = {

        title: [{
            text: '机器学习',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: basicsize*0.3
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

            top: '70%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['正确', '错误'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2
            }
        },
        series: seriesdata
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
function echarts_32(data3) {
    var seriesdata = []
    var machinedata = data3.filter(function (item) {
        return item.questype == '深度学习'
    }
    )
    machinedata.forEach((element, index) => {
        seriesdata.push({
            name: element.questype,
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#1E90FF', '#FFDEAD'],
            label: { show: true },
            labelLine: { show: false },
            data: [{
                value: element.rightnum, name: '正确'
            },
            {
                value: element.falsenum, name: '错误'
            }
            ]
        })
    })
    var myChart = echarts.init(document.getElementById('fb2'));
    var option = {

        title: [{
            text: '深度学习',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: basicsize*0.3
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

            top: '70%',
            itemWidth: 10,
            itemHeight: 10,
            color: ['#1E90FF', '#FFDEAD'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2
            }
        },
        series: seriesdata
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_33(data3) {
    var seriesdata = []
    var machinedata = data3.filter(function (item) {
        return item.questype == '区块链'
    }
    )
    machinedata.forEach((element, index) => {
        seriesdata.push({
            name: element.questype,
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#1E90FF', '#FFDEAD'],
            label: { show: true },
            labelLine: { show: false },
            data: [{
                value: element.rightnum, name: '正确'
            },
            {
                value: element.falsenum, name: '错误'
            }
            ]
        })
    })
    var myChart = echarts.init(document.getElementById('fb3'));
    var option = {

        title: [{
            text: '区块链',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: basicsize*0.3
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

            top: '70%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['正确', '错误'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2
            }
        },
        series: seriesdata
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_34(data3) {
    var seriesdata = []
    var machinedata = data3.filter(function (item) {
        return item.questype == '云计算'
    }
    )
    machinedata.forEach((element, index) => {
        seriesdata.push({
            name: element.questype,
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#1E90FF', '#FFDEAD'],
            label: { show: true },
            labelLine: { show: false },
            data: [{
                value: element.rightnum, name: '正确'
            },
            {
                value: element.falsenum, name: '错误'
            }
            ]
        })
    })
    var myChart = echarts.init(document.getElementById('fb4'));
    var option = {

        title: [{
            text: '云计算',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: basicsize*0.3
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

            top: '70%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['正确', '错误'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2
            }
        },
        series: seriesdata
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_35(data3) {
    var seriesdata = []
    var machinedata = data3.filter(function (item) {
        return item.questype == '工具语言'
    }
    )
    machinedata.forEach((element, index) => {
        seriesdata.push({
            name: element.questype,
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#1E90FF', '#FFDEAD'],
            label: { show: true },
            labelLine: { show: false },
            data: [{
                value: element.rightnum, name: '正确'
            },
            {
                value: element.falsenum, name: '错误'
            }
            ]
        })
    })
    var myChart = echarts.init(document.getElementById('fb5'));
    var option = {

        title: [{
            text: '工具语言',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: basicsize*0.3
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

            top: '70%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['正确', '错误'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2
            }
        },
        series: seriesdata
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_36(data3) {
    var seriesdata = []
    var machinedata = data3.filter(function (item) {
        return item.questype == '基础平台'
    }
    )
    machinedata.forEach((element, index) => {
        seriesdata.push({
            name: element.questype,
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#1E90FF', '#FFDEAD'],
            label: { show: true },
            labelLine: { show: false },
            data: [{
                value: element.rightnum, name: '正确'
            },
            {
                value: element.falsenum, name: '错误'
            }
            ]
        })
    })
    var myChart = echarts.init(document.getElementById('fb6'));
    var option = {

        title: [{
            text: '基础平台',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: basicsize*0.3
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

            top: '70%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['正确', '错误'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2
            }
        },
        series: seriesdata
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_37(data3) {
    var seriesdata = []
    var machinedata = data3.filter(function (item) {
        return item.questype == '物联网'
    }
    )
    machinedata.forEach((element, index) => {
        seriesdata.push({
            name: element.questype,
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#1E90FF', '#FFDEAD'],
            label: { show: true },
            labelLine: { show: false },
            data: [{
                value: element.rightnum, name: '正确'
            },
            {
                value: element.falsenum, name: '错误'
            }
            ]
        })
    })
    var myChart = echarts.init(document.getElementById('fb7'));
    var option = {

        title: [{
            text: '物联网',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: basicsize*0.3
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

            top: '70%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['正确', '错误'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2
            }
        },
        series: seriesdata
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_38(data3) {
    var filteroptions=['机器学习','深度学习','区块链','云计算','工具语言','基础平台','物联网']
    var seriesdata = []
    var otherdata = data3.filter(function (item) {
        return filteroptions.indexOf(item.questype)<0
    }
    )
    console.log(otherdata)
    var rightnum=otherdata.reduce((a,b)=>{return {rightnum:a.rightnum+b.rightnum}}).rightnum
    var falsenum=otherdata.reduce((a,b)=>{return {falsenum:a.falsenum+b.falsenum}}).falsenum
    otherdata.forEach((element, index) => {
        seriesdata.push({
            name: '其他',//element.questype,
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#1E90FF', '#FFDEAD'],
            label: { show: true },
            labelLine: { show: false },
            data: [{
                value: rightnum, name: '正确'
            },
            {
                value: falsenum, name: '错误'
            }
            ]
        })
    })
    var myChart = echarts.init(document.getElementById('fb8'));
    var option = {

        title: [{
            text: '其他',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: basicsize*0.3
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

            top: '70%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['正确', '错误'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: basicsize*0.2
            }
        },
        series: seriesdata
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function echarts_rank(rankdata) {
    rankdata.splice(10)
    var myChart = echarts.init(document.getElementById('map4'));
    var weatherIcons = {
        first: "../assets/img/1st.png",
        second: "../assets/img/2nd.png",
        third: "../assets/img/3rd.png",
    }
    var sourcedata=[]
    rankdata.forEach((element,rank)=>{
        sourcedata.push({
            mingzi:element.mingzi,
            score:parseInt(element.score)
        })
    })
    var option = {
        title: {
            /*text:'实时排行榜',
            x:'center',
            y:'top',
            padding:[20,0,50,0],
            textStyle:{
                //文字颜色
                color:'#fff',
                //字体风格,'normal','italic','oblique'
                fontStyle:'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight:'bold',
                //字体系列
                fontFamily:'sans-serif',
                //字体大小
        　　　　 fontSize:30,
                textBorderWidth:5
            }*/
        },
        tooltip: {
            trigger: "axis",
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: []
        },
        grid: {
            x: basicsize*2, //左留白
            y: 0, //上留白
            x2: 0, //右留白
            y2: 0 //下留白
        },
        calculable: true,
        dataset: {
            dimensions: ["mingzi", "score"],
            source: sourcedata
        },
        xAxis: [
            {
                splitLine: {
                    show: false
                },
                type: "value",
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.3)",
                        width: 1
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 500,
                    textStyle: {
                        align: "left",
                        color: "#00FFFF", //更改坐标轴文字颜色
                        fontSize: basicsize*0.4, //更改坐标轴文字大小
                        fontWeight:'bold'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: "category",
                // data: ["泽兰", "人参", "枸杞", "3.紫苏", "2.香叶", "1.车前草"],
                //boundaryGap: ["1%", "1%"],  类目起始和结束两端空白策略
                inverse: true,
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.2)",
                        width: 1
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: function (value, index) {
                            return index <= 2 ? "#FDAD00" : "#fff";
                        },
                        //更改坐标轴文字颜色
                        fontWeight:'bold',
                        fontSize: basicsize*0.3 //更改坐标轴文字大小

                    },
                    formatter: function (value, index) {
                        if (index == 0) {
                            return "{first|}" + "  1 " + value;
                        } else if (index == 1) {
                            return "{second|}" + "  2 " + value;
                        } else if (index == 2) {
                            return "{third|}" + "  3 " + value;
                        } else {
                            return "      " + (index + 1) + " " + value;
                        }
                    },
                    rich: {
                        value: {
                            color: "#fff",
                            fontSize: basicsize*0.2
                        },
                        first: {
                            color: "FDAD00",
                            backgroundColor: {
                                image: weatherIcons.first
                            }
                        },
                        second: {
                            color: "FDAD00",
                            backgroundColor: {
                                image: weatherIcons.second
                            }
                        },
                        third: {
                            color: "FDAD00",
                            backgroundColor: {
                                image: weatherIcons.third
                            }
                        }
                    }
                }
            }
        ],
        series: [
            {
                // name:'2011年',
                type: "bar",
                // data: [200, 210, 220, 230, 240, 250],
                itemStyle: {
                    normal: {
                        //每根柱子颜色设置
                        color: function (params) {
                            var _this = this
                            var templist = [
                                ["#E56E6E", "#EFA4A4"],
                                ["#FEB763", "#F9CF9E"],
                                ["#00C0DD", "#00C0DD"],
                                ["#23C83E", "#9BF194"],
                                ["#1AA291", "#1AA291"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"],
                                ["#4186EC", "#3AB3FB"]
                            ]
                            var tempindex = params.dataIndex
                            var color1=templist[tempindex][0]
                            var color2=templist[tempindex][1]
                            var result={
                                colorStops: [
                                    {
                                        offset: 0.8, //颜色的开始位置
                                        color: color1 // 0% 处的颜色
                                    },
                                    {
                                        offset: 0, //颜色的结束位置
                                        color: color2 // 100% 处的颜色
                                    }
                                ]
                            }
                            return result
                        }
                    }
                }, //柱状图上显示数据
                label: {
                    show: "true",
                    position: [220, "20%"],
                    color: "#FFF",
                    fontSize: basicsize*0.4
                }
            }
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}