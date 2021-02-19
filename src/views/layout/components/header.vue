<template>
  <div class="nav-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/main' }">系统首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/cate' }">分类管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/article' }">文章管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/write' }">博客管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/user' }">管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <span class="name">昵称</span>
      <el-button type="text" @click="goBack">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
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
.name{
  margin-right: 10px;
}
</style>
