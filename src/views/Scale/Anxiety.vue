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
    >
      <el-carousel-item>
        <div>{{ data.title }}</div>
        <div class="description">
          {{ data.description }}
        </div>
      </el-carousel-item>
      <el-carousel-item v-for="(item, index) in data.data" :key="index">
        <h3>{{ index + 1 }}</h3>
        <div>
          {{ item.question }}
        </div>
        <div style="margin-top: 50px">
          <!-- <el-radio-group v-model="radio1" size="mini">
            <el-radio-button lable="没有或很少时间"></el-radio-button>
            <el-radio-button lable="小部分时间"></el-radio-button>
            <el-radio-button lable="相当多时间"></el-radio-button>
            <el-radio-button lable="绝大部分或全部时间"></el-radio-button>
          </el-radio-group> -->
          <el-radio-group v-model="radio1">
            <el-radio-button :label="没有或很少时间"></el-radio-button>
            <el-radio-button :label="小部分时间"></el-radio-button>
            <el-radio-button :label="相当多时间"></el-radio-button>
            <el-radio-button :label="绝大部分或全部时间"></el-radio-button>
          </el-radio-group>
        </div>
        
      </el-carousel-item>
      <!-- <el-carousel-item>
        <div>
          {{data.message}}
        </div>
      </el-carousel-item> -->
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
      radio1: "",
      // title: "",
      // description: "",
      data: []
      // message: "量表结束页"
    };
  },
  computed: {},
  watch: {
    radio1(val) {
      console.log(val);
    }
  },
  created() {},
  async mounted() {
    let { data } = await axios.post("/anxietyData");
    // console.log(data);
    // this.title = data.title;
    // this.description = data.description;
    this.data = data;
    console.log(this.data);
  },
  methods: {
    setActiveItem() {}
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
  .description {
    width: 70%;
    height: 50%;
    text-indent: 2rem;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
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
