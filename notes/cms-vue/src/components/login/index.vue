<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="80px">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="passwd">
        <el-input v-model="loginForm.passwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')" :loading="loading" class="login-submit-wrap">立即创建
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loading: false,
        loginForm: {
          username: '',
          passwd: ''
        },
        rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          passwd: [{required: true, message: '请输入密码', trigger: 'blur'}]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('Login', this.loginForm)
                .then(() => {
                  this.loading = false;

                  this.$router.push({path: '/'});
                })
                .catch(() => {
                  this.loading = false;
                });
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 400px;
    margin-left: -200px;
    padding: 50px 40px 20px 20px;
    box-shadow: 0 0 20px 0px $gray-500;
  }
</style>