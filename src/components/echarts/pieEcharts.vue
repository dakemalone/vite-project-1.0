<template>
  <div id="pieEcharts" style="width: 600px; height: 600px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("pieEcharts"));
    var option = {
      // title: { text: "饼图程序调用高亮示例", left: "left" },
      tooltip: {
        trigger: "item",
        formatter: "{a}<br />{b} : {c} ({d}%)",
      },
      // legend: {
      //   orient: "horizontal",
      //   left: "auto",
      //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      // },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            {
              value: 335,
              name: "直接访问",
            },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart.setOption(option);

    let currentIndex = -1;
    setInterval(function () {
      var dataLen = option.series[0].data.length;
      //取消之前高亮的图形
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      currentIndex = (currentIndex + 1) % dataLen;
      //高亮当前图形
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      // 显示 tooltip
      myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
    }, 1000);

    // myChart.getZr().on("click", function (event) {
    //   console.log(event);
    //   // 该监听器正在监听一个`zrender事件`。
    // });
    myChart.on("click", function (event) {
      console.log(event.data.value+event.data.name);
      //该监听器正在监听一个`echarts 事件`。
    });

    // myChart.getZr().on("click", function (event) {
    //   // 没有 target意味着鼠标/指针不在任何一个图形元素上，它是从“空白处”触发的。
    //   if (!event.target) {
    //     // 点击在了空白处，做些什么。
    //     console.log(event);
    //   } else {
    //     console.log(event);
    //   }
    // });
  },
};
</script>

<style></style>
