/**
* Particleground
*
* @author Jonathan Nicol - @mrjnicol
* @version 1.0.1
* @description Creates a canvas based particle system background
*
* Inspired by:
* http://requestlab.fr/
* http://disruptivebydesign.com/
* 
* @license The MIT License (MIT)
* 
* Copyright (c) 2014 Jonathan Nicol - @mrjnicol
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
var canvas
var i
var pagetimer=[]
var pointerX,pointerY
var stylelist=["YouYuan","LiSu","STXihei","STKaiti","STSong","STZhongsong","STFangsong","FZShuTi","FZYaoTi","STCaiyun","STHupo","STLiti","STXingkai","STXinwei"]
var namelist=["机器学习","深度学习","区块链","AI","商业智能BI","计算机视觉","自然语言处理","知识图谱","图计算","统计分析","数据挖掘","数据预处理","工具语言",
                    "基础平台","朴素贝叶斯","聚类","分类","决策树","回归","支持向量机","神经网络","人脸识别","OCR","词表示分析","社区发现","中位数","方差","数据预处理",
                    "python","TensorFlow","Pytorch","PaddlePaddle","kylin","zookeeper","hadoop","spark","flink","storm","kafka","redis","Neo4j"]
!function (a) {
    function b(b, d) {
        console.log("particle")
        function e() {
            if (w) {
                canvas = a('<canvas id="canvas" class="pg-canvas"></canvas>'), 
                //v.prepend(canvas), p = canvas[0], 
                p = document.getElementById("canvas1")
                q = p.getContext("2d"), 
                f(); 
                var totalnum=100//Math.round(p.width * p.height / d.density)
                for (var b =totalnum , c = 0; b > c; c++) {
                    var e = new l; 
                    e.setStackPos(c), 
                    e.stylename=stylelist[parseInt(Math.random()*stylelist.length)]
                    e.fontname=namelist[parseInt(Math.random()*namelist.length)]
                    x.push(e)
                }
                a(window).on("resize", function () {
                    h()
                }
                ), a(document).on("mousemove", function (a) {
                    y = a.pageX, z = a.pageY
                }
                ), B && !A && window.addEventListener("deviceorientation", function () {
                    D = Math.min(Math.max(-event.beta, -30), 30), C = Math.min(Math.max(-event.gamma, -30), 30)
                }
                    , !0), g(), o("onInit")
            }
        }
        function f() {
            p.width = v.width(), p.height = v.height(), q.fillStyle = d.dotColor, q.strokeStyle = d.lineColor, q.lineWidth = d.lineWidth
        }
        function g() {
            if (w) {
                s = a(window).width(), t = a(window).height(), q.clearRect(0, 0, p.width, p.height); 
                for (var b = 0; b < x.length; b++){
                    x[b].updatePosition(); 
                }
                for (var b = 0; b < x.length; b++)
                {
                    x[b].draw(); 
                }
                E || (r = requestAnimationFrame(g),pagetimer.push(r))
            }
        }
        function h() {
            for (f(), i = x.length - 1; i >= 0; i--)(x[i].position.x > v.width() || x[i].position.y > v.height()) && x.splice(i, 1); var a = Math.round(p.width * p.height / d.density); if (a > x.length) for (; a > x.length;) {
                var b = new l; x.push(b)
            }
            else a < x.length && x.splice(a); for (i = x.length - 1; i >= 0; i--)x[i].setStackPos(i)
        }
        function j() {
            E = !0
        }
        function k() {
            E = !1, g()
        }
        function l() {
            switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = {
                x: Math.ceil(Math.random() * p.width), y: Math.ceil(Math.random() * p.height)
            }
            , this.speed = {
            }
            , d.directionX) {
                case "left": this.speed.x = +(-d.maxSpeedX + Math.random() * d.maxSpeedX - d.minSpeedX).toFixed(2); break; case "right": this.speed.x = +(Math.random() * d.maxSpeedX + d.minSpeedX).toFixed(2); break; default: this.speed.x = +(-d.maxSpeedX / 2 + Math.random() * d.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? d.minSpeedX : -d.minSpeedX
            }
            switch (d.directionY) {
                case "up": this.speed.y = +(-d.maxSpeedY + Math.random() * d.maxSpeedY - d.minSpeedY).toFixed(2); break; case "down": this.speed.y = +(Math.random() * d.maxSpeedY + d.minSpeedY).toFixed(2); break; default: this.speed.y = +(-d.maxSpeedY / 2 + Math.random() * d.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? d.minSpeedY : -d.minSpeedY
            }
        }
        function m(a, b) {
            return b ? void (d[a] = b) : d[a]
        }
        function n() {
            v.find(".pg-canvas").remove(), o("onDestroy"), v.removeData("plugin_" + c)
        }
        function o(a) {
            void 0 !== d[a] && d[a].call(u)
        }
        var gradient;
        var width=document.body.clientWidth
        var p, q, r, s, t, u = b, v = a(b), w = !!document.createElement("canvas").getContext, x = [], y = 0, z = 0, A = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), B = !!window.DeviceOrientationEvent, C = 0, D = 0, E = !1; return d = a.extend({
        }
            , a.fn[c].defaults, d), l.prototype.draw = function () {
                q.beginPath(), q.font="30px "+this.stylename,
                gradient=q.createLinearGradient(0,0,width,0),
                gradient.addColorStop("0","magenta"),
                gradient.addColorStop("0.5","blue"),
                gradient.addColorStop("1.0","red"),
                q.fillStyle=gradient,
                q.fillText(this.fontname,this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), 
                q.restore(),
                q.closePath(), q.fill(), 
                q.beginPath(); 
                for (var a = x.length - 1; a > this.stackPos; a--) {
                    var b = x[a], c = this.position.x - b.position.x, 
                    e = this.position.y - b.position.y, f = Math.sqrt(c * c + e * e).toFixed(2); f < d.proximity && (q.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), d.curvedLines ? q.quadraticCurveTo(Math.max(b.position.x, b.position.x), Math.min(b.position.y, b.position.y), b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY) : q.lineTo(b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY))
                }
                q.stroke(), q.closePath()
            }
            , l.prototype.updatePosition = function () {
                if (d.parallax) {
                    if (B && !A) {
                        var a = (s - 0) / 60; pointerX = (C - -30) * a + 0; var b = (t - 0) / 60; pointerY = (D - -30) * b + 0
                    }
                    else pointerX = y, pointerY = z; this.parallaxTargX = (pointerX - s / 2) / (d.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (pointerY - t / 2) / (d.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
                }
                switch (d.directionX) {
                    case "left": this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = v.width() - this.parallaxOffsetX); break; case "right": this.position.x + this.speed.x + this.parallaxOffsetX > v.width() && (this.position.x = 0 - this.parallaxOffsetX); break; default: (this.position.x + this.speed.x + this.parallaxOffsetX > v.width() || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
                }
                switch (d.directionY) {
                    case "up": this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = v.height() - this.parallaxOffsetY); break; case "down": this.position.y + this.speed.y + this.parallaxOffsetY > v.height() && (this.position.y = 0 - this.parallaxOffsetY); break; default: (this.position.y + this.speed.y + this.parallaxOffsetY > v.height() || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
                }
                this.position.x += this.speed.x, this.position.y += this.speed.y
            }
            , l.prototype.setStackPos = function (a) {
                this.stackPos = a
            }
            , e(), {
                option: m, destroy: n, start: k, pause: j
            }
    }
    var c = "particleground"; a.fn[c] = function (d) {
        if ("string" == typeof arguments[0]) {
            var e, f = arguments[0], g = Array.prototype.slice.call(arguments, 1); return this.each(function () {
                a.data(this, "plugin_" + c) && "function" == typeof a.data(this, "plugin_" + c)[f] && (e = a.data(this, "plugin_" + c)[f].apply(this, g))
            }
            ), void 0 !== e ? e : this
        }
        return "object" != typeof d && d ? void 0 : this.each(function () {
            a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d))
        }
        )
    }
        , a.fn[c].defaults = {
            minSpeedX: .1, maxSpeedX: .7, minSpeedY: .1, maxSpeedY: .7, directionX: "center", directionY: "center", density: 1e4, dotColor: "#666666", lineColor: "#666666", particleRadius: 7, lineWidth: 1, curvedLines: !1, proximity: 100, parallax: !0, parallaxMultiplier: 5, onInit: function () {
            }
            , onDestroy: function () {
            }
        }
}
    (jQuery);