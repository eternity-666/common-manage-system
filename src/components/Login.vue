<template>
  <div class="login">
   


      
      <el-form label-width="80px" :model="form" ref="form" :rules="rules" class="login-page">
        <h2 class="title" style="margin-bottom: 20px">系统登陆</h2>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
     
    </el-form>


  </div>
</template>
<script>
import { nameRule, passRule } from '@/utils/validate.js'
import { Message } from 'element-ui';
import { login } from '@/api/index.js'
import { setToken } from '@/utils/token';

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            validator: nameRule,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: passRule,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          login(this.form).then(res => {
            console.log(res);

            if (res.status == 201) {
              Message.success('登录成功')
              setToken('username', JSON.parse(res.config.data).username)
              setToken('token', res.data.token)
              this.$router.push('/home')
            }
          }).catch(err => {
            console.log(err);
          })

        } else {

        }
      })
    }
  },
};





</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #ff;
  background-size: contain;
  overflow: hidden;
  .login-page {
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

}
</style>