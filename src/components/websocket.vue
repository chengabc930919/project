<template>
    <div>
        <button @click="send">发消息</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            path:"ws://127.0.0.1:8888/exam",
            socket:"",
            name:""
        }
    },
    mounted () {
        // 初始化
        this.init()
    },
    methods: {
        init: function () {
            this.name=Math.floor(Math.random() * 100000000)+''
            if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                // 实例化socket
                this.socket = new WebSocket(this.path)
                // 监听socket连接
                this.socket.onopen = this.open
                // 监听socket错误信息
                this.socket.onerror = this.error
                // 监听socket消息
                this.socket.onmessage = this.getMessage
                this.socket.onclose = this.close
            }
        },
        open: function () {
            console.log("socket连接成功")
        },
        error: function () {
            console.log("连接错误")
        },
        getMessage: function (msg) {
            var result=JSON.parse(msg.data)
            console.log(result)
            console.log(result.type)
            console.log(msg.data)
            //console.log(msg.data.type)
        },
        send: function () {
            var params=JSON.stringify({'join':this.name})
            this.socket.send(params)
        },
        close: function () {
            var params=JSON.stringify({'close':this.name})
            this.socket.send(params)
            console.log("socket已经关闭")
        }
    },
    beforeDestroy(){
        console.log(destroy)
        this.close()
    },
    destroyed () {
        // 销毁监听
        this.close()
    }
}
</script>

<style>

</style>