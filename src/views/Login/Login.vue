<template>
  <div class="container">
    <div class="wrapper">
      <h3 style="text-align:center;margin-top:40px">管理端</h3>
      <div class="login">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账户" prop="text">
            <el-input
              type="text"
              v-model="ruleForm.text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.Pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: [],
  data() {
    var validatePass = (rule, value, callback) => {
      // console.log(rule, value, callback);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.text !== "") {
          this.$refs.ruleForm.validateField("pass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        text: "",
        pass: ""
      },
      rules: {
        text: [
          { required: true, message: "请输入账户", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      // console.log(this.pass);
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        // console.log(valid);
        if (valid) {
          alert("submit!");
          this.$router.push("/layout");
        } else {
          console.log("error submit!!");
          this.$router.push("/layout");

          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background-image: url(../../assets/bg.jpg);
  background-size: 100vw 100vh;
  .wrapper {
    position: fixed;
    top: 30%;
    right: 10%;
    background-color: #fff;
    width: 400px;
    height: 300px;
    border-radius: 15px;
  }
  .login {
    position: absolute;
    top: 30%;
    left: 5%;
    width: 300px;
  }
}
</style>
