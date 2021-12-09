<template>
    <div id="nav">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabbar'
}
</script>
<style scoped>
#nav{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 -3px 1px rgba(100,100,100,0.2);
}
</style>