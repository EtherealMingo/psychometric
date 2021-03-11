<template>
  <div>
    <!-- 首行添加按钮 -->
    <el-row>
      <el-button
        type="primary"
        round
        icon="el-icon-edit"
        size="small"
        style="margin-left:2%"
        @click="drawer = true"
        >添加</el-button
      >
    </el-row>
    <el-main>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="longDate" label="预约时间" width="200">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>

        <el-table-column prop="number" label="年级" width="100">
        </el-table-column>
        <el-table-column prop="consultant" label="选择咨询师" width="200">
        </el-table-column>
        <el-table-column prop="source" label="来源" width="150">
        </el-table-column>
        <el-table-column prop="remarks" label="备注" width="400">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <!-- 抽屉 -->
    <el-drawer
      title="添加预约信息"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="40vw"
    >
      <el-container class="form_container">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年级">
            <el-select v-model="form.grade" placeholder="请选择年级">
              <el-option label="大一" value="1"></el-option>
              <el-option label="大二" value="2"></el-option>
              <el-option label="大三" value="3"></el-option>
              <el-option label="大四" value="4"></el-option>
              <el-option label="大五" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预约时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="1" style="text-align:center">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%;"
              ></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="选择咨询师">
            <el-checkbox-group v-model="form.consultant">
              <el-checkbox label="王挺" name="consultant"></el-checkbox>
              <el-checkbox label="黄安国" name="consultant"></el-checkbox>
              <el-checkbox label="孙越异" name="consultant"></el-checkbox>
              <el-checkbox label="孔梦雅(实习)" name="consultant"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="来源">
            <el-radio-group v-model="form.source">
              <el-radio label="本校"></el-radio>
              <el-radio label="毕业生"></el-radio>
              <el-radio label="校外人员"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.remarks"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-container>
    </el-drawer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      tableData: [],
      drawer: false,
      direction: "rtl",
      form: {
        name: "",
        grade: "",
        date1: "",
        date2: "",
        consultant: [],
        source: "",
        remarks: ""
      }
    };
  },
  computed: {},
  watch: {},
  async created() {
    let {
      data: { data }
    } = await axios.post("/personnel");
    this.tableData = data;
    console.log(data);
  },
  mounted() {},
  methods: {
    //查看个人信息
    handleClick(row) {
      console.log(row);
    },
    // 提交表单信息
    onSubmit() {
      console.log(this.form);
    },
    handleClose(done) {
      this.$confirm("确认关闭预约信息表单？")
        // eslint-disable-next-line no-unused-vars
        .then(_ => {
          this.form = {
            name: "",
            grade: "",
            date1: "",
            date2: "",
            consultant: [],
            source: "",
            remarks: ""
          };
          done();
        })
        // eslint-disable-next-line no-unused-vars
        .catch(_ => {});
    }
  }
};
</script>

<style scoped lang="scss">
.form_container {
  width: 70%;
  margin-left: 10%;
}
</style>
