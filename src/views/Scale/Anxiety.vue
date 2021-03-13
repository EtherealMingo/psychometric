<template>
  <div>
    焦虑自测量表SAS

    <el-carousel
      type="card"
      height="500px"
      :autoplay="false"
      :loop="false"
      trigger="click"
      :initial-index="0"
      arrow="never"
    >
      <!-- 量表起始页 -->
      <el-carousel-item class="first" label="起">
        <div class="title">{{ data.title }}</div>
        <div class="description">
          {{ data.description }}
        </div>
      </el-carousel-item>
      <!-- 量表题目页 -->
      <el-carousel-item
        v-for="(item, index) in data.data"
        :key="index"
        :label="index + 1"
      >
        <h3>{{ index + 1 }}</h3>
        <div class="question">
          {{ item.question }}
        </div>
        <div style="margin-top: 50px">
          <el-radio-group v-model="radio[index]" class="radio_group">
            <el-radio :label="item.a">没有或很少时间</el-radio>
            <el-radio :label="item.b">小部分时间</el-radio>
            <el-radio :label="item.c">相当多时间</el-radio>
            <el-radio :label="item.d">绝大部分或全部时间</el-radio>
          </el-radio-group>
        </div>
      </el-carousel-item>
      <!-- 量表结束页 -->
      <el-carousel-item v-if="data.data" label="终">
        <div class="last">
          <div v-show="index == 0 ? true : false">
            当前焦虑值:{{ totalScore }}
          </div>
          <div>{{ message }}</div>
          <div v-show="index !== 0 ? true : false">您第{{ index }}题未填写</div>
          <el-button type="primary" plain @click="getTotalScore()"
            >获取结果</el-button
          >
        </div>
      </el-carousel-item>
    </el-carousel>
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
      radio: [],
      data: [],
      //尾页数据
      totalScore: 0,
      message: "",
      // 走马灯页面下标
      index: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  async mounted() {
    let { data } = await axios.post("/anxietyData");
    this.data = data;
    // console.log(this.data);
  },
  methods: {
    getTotalScore() {
      // 求和
      let sum = 0;
      const len = this.radio.length;
      for (let i = 0; i < len; i++) {
        sum += this.radio[i];
      }
      this.totalScore = parseInt(sum * 1.25);
      //判断焦虑值对应的焦虑程度
      if (sum > 70) {
        this.message = "严重焦虑";
      } else if (sum > 60) {
        this.message = "中度焦虑";
      } else if (sum > 50) {
        this.message = "轻度焦虑";
      } else if (sum > 20) {
        this.message = "正常";
      }
      //观察this.radio数组情况
      console.log(this.radio);
      if (len < 20) {
        //考虑量表前面连续填写 后面没填的情况,
        //数组中不存在empty,但是数组长度没达到问题数.
        this.$notify({
          title: "警告",
          message: "请填写完整量表",
          type: "warning"
        });
        //未填写问题的对应下标
        this.index = len + 1;
        console.log(this.index);
        this.totalScore = null;
        this.message = "";
      } else if (!sum) {
        //数组长度等于问题数,但是存在empty的情况
        this.$notify({
          title: "警告",
          message: "请填写完整量表",
          type: "warning"
        });
        //将empty转为数组元素0
        for (let j = 0; j < len; j++) {
          if (!this.radio[j]) {
            this.radio[j] = 0;
          }
        }
        //未填写问题的对应下标
        this.index = this.radio.indexOf(0) + 1;
        console.log(this.index);
        this.totalScore = null;
        this.message = "";
      }
    },
    setActiveItem(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped lang="scss">
.el-carousel__item {
  border-radius: 10px;
  box-shadow: 0 0 1px #fff;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // 量表起始页
  &.first {
    .title {
      margin-top: 20%;
      margin-bottom: 5%;
      font-size: 1.5rem;
    }
    .description {
      width: 70%;
      height: 50%;
      text-indent: 2rem;
    }
  }
  // 量表题目页
  h3 {
    color: #475669;
    font-size: 16px;
    opacity: 0.75;
    line-height: 150px;
    margin-bottom: 20px;
  }
  .question {
    font-size: 1.2rem;
  }
  .radio_group {
    display: flex;
    flex-direction: column;
    .el-radio {
      margin-top: 10px;
    }
  }
  .last {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20%;
    div {
      margin: 20px;
    }
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #eef5fe;
  border: 1px solid #f3f8ff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff;
  box-shadow: 0 0 3px #d3d4d6;
}
</style>
