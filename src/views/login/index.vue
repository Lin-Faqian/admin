<template>
  <div class="login-container">
    <el-form :model="user" status-icon :rules="rules" ref="user">
          <el-form-item class="text">
              <span>博客后台管理系统</span><hr />
          </el-form-item>
          <el-form-item prop="mobile">
            <el-input v-model="user.mobile" placeholder="请输入账号" autocomplete="off">
              <template slot="prepend"><i class="el-icon-s-custom"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input type="password" v-model="user.code" placeholder="请输入密码" autocomplete="off" show-password>
              <template slot="prepend"><i class="el-icon-lock"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" :loading="loading">登录</el-button>
            <el-button type="primary" @click="goHome">主页</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import request from '@/utils/request.js'

export default {
  components: {
  },
  props: {
  },
  data () {
    return {
      checked: false,
      loading: false,
      user: {
        mobile: '', // 13911111111
        code: ''// 246810
      },
      rules: {
        mobile: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
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
    goHome () {
      this.$router.replace('/')
      window.location.reload()
    },
    submitForm () {
      this.loading = true
      const user = this.user
      request({
        method: 'post',
        url: '/user',
        data: user
      }).then(res => {
        this.loading = false
        console.log(res)
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login-container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./login_bg.jpg') no-repeat;
  background-size: 100% 100%;
  opacity: 0.9;
}
.el-form{
  padding: 20px 50px;
  min-width: 300px;
  background-color: #fff;
}
.el-button{
  width: 48%;
}
.text{
  text-align: center;
}
</style>
