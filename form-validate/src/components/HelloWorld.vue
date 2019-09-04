<template>
  <div class="hello">

    <h2>My Form UI</h2>
    <my-form :model="ruleForm" :rules="rules" ref="myForm">
      <my-form-item label="用户名" prop="username">
        <my-input v-model="ruleForm.username"></my-input>
      </my-form-item>

      <my-form-item label="密码" prop="password">
        <my-input type="password" v-model="ruleForm.password"></my-input>
      </my-form-item>

      <my-form-item>
        <el-button @click="submitForm('myForm')">提交</el-button>
      </my-form-item>
    </my-form>

    <br/>
    <h2>element-ui</h2>

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import MyInput from '@/components/MyInput'
import MyFormItem from '@/components/MyFormItem'
import MyForm from '@/components/MyForm'
export default {
  components: {
    'my-input': MyInput,
    'my-form-item': MyFormItem,
    'my-form': MyForm
  },
  data () {
    return {
      myForm: {
        username: '',
        password: ''
      },
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{required: true, message: '请输入密码'}]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
