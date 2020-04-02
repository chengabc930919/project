<template>
  <div class="login-container">
    <test1/>
    <div>{{data}}</div>
    <keep-alive><router-view v-if="$route.meta.keepalive"/></keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
    <button @click="click"/>
  </div>
  <!-- </div> -->
</template>

<script>
import test1 from './test1'
import { sha256_digest } from '@/js/sh256.js'
import request from '@/utils/request'
export default {
  name: 'mysql',
  components: {test1},
  data() {
    return {
      data: '11',
      cashviews: ['Dashboard']
    }
  },
  methods:{
    click(){
      var data={'id':11}
      request({
        url: 'http://127.0.0.1:8080/user/login',
        method: 'post',
        data,
        headers:{
          'Access-Control-Allow-Origin':'*',
          'x-token':'aa'
        }
      }).then(response=>{
        const { data } = response
        console.log(data)
      })
    }
  },
  mounted() {
    this.data=  sha256_digest('123')
  }
}
</script>
