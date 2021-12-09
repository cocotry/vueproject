<template>
  <div id="tabbar">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from '@/components/tabbar/mainTabBar.vue'
export default {
  components:{
    mainTabBar
  }
}
</script>

<style>
/* 第二种 */
/* @import url("./assets/css/base.css"); */

@import "./assets/css/base.css";

</style>
