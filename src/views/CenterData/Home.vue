<template>
  <div id="main">
    <div id="myChart" :style="{ width: '700px', height: '600px' }"></div>
  </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";

export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(echarts);
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        legend: {
          top: "bottom"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [20, 200],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 20, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
