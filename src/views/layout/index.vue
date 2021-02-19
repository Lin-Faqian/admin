<template>
  <el-container class="layout-container">
    <el-aside class="aside" width="200px">
      <aside-menu class="aside-menu"></aside-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <header-nav class="header-nav"></header-nav>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'layout',
  components: {
    asideMenu: () => import('./components/aside'),
    headerNav: () => import('./components/header')
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.layout-container{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.aside{
  .aside-menu{
    height: 100%;
  }
}
.header{
  border-bottom: 3px solid #ccc;
  .header-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
}
.main{
  background-color: pink;
}
</style>
