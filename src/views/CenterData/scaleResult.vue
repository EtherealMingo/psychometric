<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>

      <el-table-column prop="city" label="省市区" width="200">
      </el-table-column>
      <el-table-column prop="url" label="网址" width="300"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"> </el-table-column>
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
    <el-drawer
      title="查看详细信息"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>{{ drawerData.name }}</span>
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
      drawerData: {}
    };
  },
  computed: {},
  watch: {},
  async created() {
    let {
      data: { data }
    } = await axios.get("/api/user/myTranferRecord");
    this.tableData = data;
  },
  mounted() {
    console.log(this.tableData);
  },
  methods: {
    //查看方法
    handleClick(row) {
      this.drawer = true;
      console.log(row);
      this.drawerData = row;
    },
    //删除方法
    deleteRow(index, rows, done) {
      this.$confirm("确认删除？")
        // eslint-disable-next-line no-unused-vars
        .then(_ => {
          rows.splice(index, 1);
          done();
        })
        // eslint-disable-next-line no-unused-vars
        .catch(_ => {});
    },
    //关闭抽屉
    handleClose(done) {
      done();
    }
  }
};
</script>

<style scoped lang="scss"></style>
