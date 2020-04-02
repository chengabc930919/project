/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable no-redeclare */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable new-cap */
/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/*author: 张程 2020-03-27 v1.0
*改于Particleground
* @author Jonathan Nicol - @mrjnicol
* @version 1.0.1
* @description Creates a canvas based particle system background
*/
var pagetimer = []
//宽度和长度，用于绘制背景
var width = window.innerWidth
var height = window.innerHeight
var params = {
    minSpeedX: 0.1,
    maxSpeedX: 0.7,
    minSpeedY: 0.1,
    maxSpeedY: 0.7,
    directionX: 'center',
    directionY: 'center',
    density: 1e4,
    dotColor: '#666666',
    lineColor: '#666666',
    particleRadius: 7,
    lineWidth: 1,
    curvedLines: !1,
    proximity: 100,
    parallax: !0,
    parallaxMultiplier: 5
}
//用于绘制背景文字的style和文字list
var x=[]
var pointerX = 0
var pointerY = 0
var stylelist = ['YouYuan', 'LiSu', 'STXihei', 'STKaiti', 'STSong', 'STZhongsong', 'STFangsong', 'FZShuTi', 'FZYaoTi', 'STCaiyun', 'STHupo', 'STLiti', 'STXingkai', 'STXinwei']
var namelist = ['机器学习', '深度学习', '区块链', 'AI', '商业智能BI', '计算机视觉', '自然语言处理', '知识图谱', '图计算', '统计分析', '数据挖掘', '数据预处理', '工具语言',
    '基础平台', '朴素贝叶斯', '聚类', '分类', '决策树', '回归', '支持向量机', '神经网络', '人脸识别', 'OCR', '词表示分析', '社区发现', '中位数', '方差', '数据预处理',
    'python', 'TensorFlow', 'Pytorch', 'PaddlePaddle', 'kylin', 'zookeeper', 'hadoop', 'spark', 'flink', 'storm', 'kafka', 'redis', 'Neo4j']
function newparticle(index) {
    var item = {}
    item.stackPos = index
    item.layer = Math.ceil(3 * Math.random())
    item.active = true
    item.parallaxOffsetX = 0
    item.parallaxOffsetY = 0
    item.position={
        x: Math.ceil(Math.random() * width),
        y: Math.ceil(Math.random() * height)
    }
    item.speed={}
    switch (params.directionX) {
        case 'left':
            item.speed.x = (-params.maxSpeedX + Math.random() * params.maxSpeedX - params.minSpeedX)
            break
        case 'right':
            item.speed.x = (Math.random() * d.maxSpeedX + d.minSpeedX); break
        default:
            item.speed.x = (-params.maxSpeedX / 2 + Math.random() * params.maxSpeedX)
            item.speed.x += item.speed.x > 0 ? params.minSpeedX : -params.minSpeedX
    }
    switch (params.directionY) {
        case 'up':
            item.speed.y = (-params.maxSpeedY + Math.random() * params.maxSpeedY - params.minSpeedY)
            break
        case 'down':
            item.speed.y = (Math.random() * params.maxSpeedY + params.minSpeedY); break
        default:
            item.speed.y = (-params.maxSpeedY / 2 + Math.random() * params.maxSpeedY)
            item.speed.y += item.speed.y > 0 ? params.minSpeedY : -params.minSpeedY
    }
    item.stylename = stylelist[parseInt(Math.random() * stylelist.length)]
    item.fontname = namelist[parseInt(Math.random() * namelist.length)]
    return item
}
function updatePosition(item) {
    var s=width
    var t=height
    item.parallaxTargX = (pointerX - s / 2) / (params.parallaxMultiplier * item.layer), 
    item.parallaxOffsetX += (item.parallaxTargX - item.parallaxOffsetX) / 10, 
    item.parallaxTargY = (pointerY - t / 2) / (params.parallaxMultiplier * item.layer), 
    item.parallaxOffsetY += (item.parallaxTargY - item.parallaxOffsetY) / 10
    switch (params.directionX) {
        case 'left': item.position.x + item.speed.x + item.parallaxOffsetX < 0 && (item.position.x = width - item.parallaxOffsetX); break
        case 'right': item.position.x + item.speed.x + item.parallaxOffsetX > width && (item.position.x = 0 - item.parallaxOffsetX); break
        default: (item.position.x + item.speed.x + item.parallaxOffsetX > width || item.position.x + item.speed.x + item.parallaxOffsetX < 0) && (item.speed.x = -item.speed.x)
    }
    switch (params.directionY) {
        case 'up': item.position.y + item.speed.y + item.parallaxOffsetY < 0 && (item.position.y = height - item.parallaxOffsetY); break
        case 'down': item.position.y + item.speed.y + item.parallaxOffsetY > height && (item.position.y = 0 - item.parallaxOffsetY); break
        default: (item.position.y + item.speed.y + item.parallaxOffsetY > height || item.position.y + item.speed.y + item.parallaxOffsetY < 0) && (item.speed.y = -item.speed.y)
    }
    item.position.x += item.speed.x, item.position.y += item.speed.y
}
function draw(item, q) {
    q.beginPath(), q.font = '27px ' + item.stylename
    var gradient = q.createLinearGradient(0, 0, width, 0)
    gradient.addColorStop('0', 'magenta')
    gradient.addColorStop('0.5', 'blue')
    gradient.addColorStop('1.0', 'red')
    q.fillStyle = gradient,
    q.fillText(item.fontname, item.position.x + item.parallaxOffsetX, item.position.y + item.parallaxOffsetY),
    q.restore(),
    q.closePath(), q.fill(),
    q.beginPath()
    for (var a = x.length - 1; a > item.stackPos; a--) {
        var b = x[a]; var c = item.position.x - b.position.x
        var e = item.position.y - b.position.y; var f = Math.sqrt(c * c + e * e).toFixed(2)
        f < params.proximity && (q.moveTo(item.position.x + item.parallaxOffsetX, item.position.y + item.parallaxOffsetY), params.curvedLines ? q.quadraticCurveTo(Math.max(b.position.x, b.position.x), Math.min(b.position.y, b.position.y), b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY) : q.lineTo(b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY))
    }
    q.stroke(), q.closePath()
}
export function particle(q) {
    document.onmousemove=function(a) {
        pointerX = a.pageX, pointerY = a.pageY
    }
    var totalnum = 50// 初始化粒子数量
    for (var b = totalnum, c = 0; b > c; c++) {
        var e = newparticle(c)
        x.push(e)
    }
    timefunction()
    // 创建计时器
    function timefunction() {
        q.clearRect(0, 0, width, height)
        for (var b = 0; b < x.length; b++) {
            updatePosition(x[b])
        }
        for (var b = 0; b < x.length; b++) {
            draw(x[b], q)
        }
        var r = requestAnimationFrame(timefunction)
        pagetimer.push(r)
    }
    console.log(pagetimer)
    return pagetimer
}
