<template>
  <div class="login-container">
    <test1/>
    <div>{{}}</div>
    <keep-alive><router-view v-if="$route.meta.keepalive"/></keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
  </div>
  <!-- </div> -->
</template>

<script>
import test1 from './test1'
import { sha256_digest } from '@/js/sh256.js'
export default {
  name: 'main',
  components: {test1},
  data() {
    return {
      cashviews: ['Dashboard']
    }
  },
  mounted() {
    //this.data=  sha256_digest('123')
  }
}
</script>
