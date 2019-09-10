<template>
  <div class='container'>
      <el-card class="my-card">
          <img src="../../assets/images/logo_index.png" alt="">
          <!-- 表单 -->
          <!-- 表单 -->
        <el-form :model="loginForm" :rules="loginRules" status-icon ref="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号" ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:236px;margin-right:10px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%"  @click="login()">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 自定义校验函数  申明再使用，在return之前定义
    const checkMobile = (rule, value, callback) => {
      // 按照自己校验逻辑去校验值value即可
      // 手机号格式  1开头 第2位 3-9  最后 9位数字即可
      if (!/^1[3-9]\d{9}$/.test(value)) return callback(new Error('手机格式不对'))
      callback()
    }
    return {
      loginForm: {
        mobile: '18326878850',
        code: '246810'
      },
      // 校验规则对象  在data函数中定义
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          { len: 6, message: '请输入6位验证码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 1. 对整个表单进行校验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          console.log('success')
          // 2. 校验成功发起登录请求
          // 2. 校验成功发起登录请求
          this.$http
            .post(
              'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              this.loginForm
            )
            .then(res => {
              // res 是响应对象 res.data数据属于响应主体
              // console.log(res.data)
              this.$message.success('登陆成功')
              this.$router.push('/home')
            })
            .catch(() => {
              // 请求失败 提示  手机号或验证码错误
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container{
 width: 100%;
  height: 100%;
  position: absolute;
   background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
   .my-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);
    img {
      display:block;
      width: 200px;
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }
}
</style>
