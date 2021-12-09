<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor = "#ff5500">
        <template #item-icon>
          <img src="@/assets/img/tabbar/home.png" alt="">
        </template>
        <template #item-icon-active>
          <img src="@/assets/img/tabbar/home_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <p>首页</p>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor = "#ff5500">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/category.png" alt="">
        </template>
        <template #item-icon-active>
          <img src="@/assets/img/tabbar/category_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <p>关于</p>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart" activeColor = "#ff5500">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/cart.png" alt="">
        </template>
        <template #item-icon-active>
          <img src="@/assets/img/tabbar/cart_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <p>购物车</p>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor = "#ff5500">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/profile.png" alt="">
        </template>
        <template #item-icon-active>
          <img src="@/assets/img/tabbar/profile_active.png" alt="">
        </template>
        <template v-slot:item-text>
          <p>我的</p>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import tabBar from '@/components/tabbar/tabbar.vue'
import tabBarItem from '@/components/tabbar/tabbarItem.vue'
export default {
  components:{
    tabBar,
    tabBarItem
  }
}
</script>