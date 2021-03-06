<template>
  <div class="vm-chart-bar vm-panel">
    <div class="panel-body" :id="this.id" :style="{ height: height + 'px'}">
    </div>
  </div>
</template>
<script>
  // 组件引用
  // https://luosijie.github.io/vue-manager/#/charts
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')

  const color = ['#41b883', '#1d8ce0', '#324057', '#2aab84', '#1568a6', '#2f4053'];
  export default {
    name: 'VmChartBarLine',
    props: {
      // 图表区域高度
      title: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        default: 400
      },
      // 图表形状颜色, ecahrt依次选择颜色渲染
      color: {
        type: Array,
        default: function () {
          return color
        }
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: '#fff'
      },
      // 横坐标数据
      xAxisData: {
        type: Array,
        required: true,
        default: function () {
          return []
        }
      },
      // 纵坐标数据
      series: {
        type: Array,
        required: true,
        default: function () {
          return [{
            name: 'NOTSET',
            type: 'bar',
            data: []
          }]
        }
      }
    },
    data: function () {
      return {
        // 刻度颜色
        axisColor: {
          type: String,
          default: '#797979'
        },
        // 分割线颜色
        splitLineColor: {
          type: String,
          default: '#dcdcdc'
        },
        chart: null
      }
    },
    computed: {
      // 生成一个随机id, 实现图表组件的复用
      id: function () {
        return parseInt(Math.random() * 1000000)
      },
      legendData: function () {
        let legendData = []
        this.series.forEach(function (elem) {
          legendData.push(elem.name)
        })
        return legendData
      }
    },
    methods: {
      showLoading: function () {
        if (this.chart) {
          this.chart.showLoading({
            text: '',
            color: '#3090c2',
            textColor: '#000',
            maskColor: 'rgba(255, 255, 255, 0.8)',
            zlevel: 0
          })
        }
      },
      hideLoading: function () {
        if (this.chart) {
          this.chart.hideLoading()
        }
      },
      renderChart: function () {
        if (this.chart) {
          this.chart.dispose()
        }
        let showTitle = this.title != null ? true : false;


        // 初始化echart
        this.chart = echarts.init(document.getElementById(this.id))
        // 自定义eChart样式 官方配置指南(http://echarts.baidu.com/option.html#yAxis.splitLine.lineStyle.color)
        this.chart.setOption({
          title: {
            text: this.title,
            show: showTitle,
            padding: 0
          },
          legend: {
            icon: 'circle',
            data: this.legendData,
            bottom: 0
          },
          grid: {
            x: 70,
            y: 15,
            x2: 50
          },
          color: this.color,
          tooltip: {},
          xAxis: {
            data: this.xAxisData,
            axisLine: {
              lineStyle: {
                color: this.axisColor
              }
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: this.axisColor
              }
            },
            splitLine: {
              lineStyle: {
                color: '#dcdcdc'
              }
            }
          },
          series: this.series
        })
      }
    },
    watch: {
      xAxisData: function () {
        this.renderChart()
      },
      series: function () {
        this.renderChart()
      }
    },
    mounted: function () {
      this.renderChart()
    }
  }
</script>
