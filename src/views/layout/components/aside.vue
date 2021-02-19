<template>
  <el-menu
    default-active="main"
    text-color="#fff"
    :router="true"
    background-color="#002033"
    active-text-color="#ffd04b">
    <el-menu-item index="main">
      <i class="el-icon-s-home"></i>
      <span slot="title">系统首页</span>
    </el-menu-item>
    <el-menu-item index="cate">
        <i class="el-icon-menu"></i>
        <span>分类管理</span>
    </el-menu-item>
    <el-menu-item index="article">
      <i class="el-icon-document"></i>
      <span slot="title">文章管理</span>
    </el-menu-item>
    <el-menu-item index="write">
      <i class="el-icon-setting"></i>
      <span slot="title">博客管理</span>
    </el-menu-item>
    <el-menu-item index="user">
      <i class="el-icon-user-solid"></i>
      <span slot="title">管理员管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'asideChildComponent',
  components: {
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
</style>
