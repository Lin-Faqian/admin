<template>
  <div class="login-container">
    <el-form :model="user" status-icon :rules="rules" ref="user">
          <el-form-item class="text">
              <span>博客后台管理系统</span><hr />
          </el-form-item>
          <el-form-item prop="username">
            <el-input v-model="user.username" placeholder="请输入账号" autocomplete="off">
              <template slot="prepend"><i class="el-icon-s-custom"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="user.password" placeholder="请输入密码" autocomplete="off" show-password>
              <template slot="prepend"><i class="el-icon-lock"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="checked">
            <el-checkbox v-model="user.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" :loading="loading">登录</el-button>
            <el-button type="primary" @click="goHome">主页</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import { loginReq } from '@/api/user.js'

export default {
  name: 'login',
  components: {
  },
  props: {
  },
  data () {
    return {
      loading: false,
      user: {
        username: '', // 13911111111
        password: '', // 246810
        checked: false
      },
      rules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        checked: [{
          validator: (rule, value, callback) => {
            value ? callback() : callback(new Error('请同意用户协议'))
          },
          trigger: blur
        }]
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
    login () {
      this.loading = true
      loginReq(this.user).then(res => {
        this.loading = false
        this.$router.push('/home')
        console.log(res)
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    },
    submitForm () {
      this.$refs.user.validate(valid => {
        if (!valid) {
          return
        }
        this.login()
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
