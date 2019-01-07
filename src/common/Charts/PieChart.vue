<template>
  <div>
    <div :style="{height:height,width:width}" ref="chartsBody"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {debounce} from "../../utils/tools";
require('echarts/theme/macarons') // echarts theme
/**
 * 环形图
 */
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartData:{
      type:Array
    }
  },
  watch: {
      chartData: {
        deep: true,
        handler(val) {
          this.setOptions(val)
        }
      }
    },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHanlder)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setOptions(data=[]){
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: data.map(item=>item.name)
        },
        calculable: true,
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '75%'],
            center: ['50%', '40%'],
            data:data,
            // data: [
            //   { value: 320, name: 'Industries' },
            //   { value: 240, name: 'Technology' },
            //   { value: 149, name: 'Forex' },
            //   { value: 100, name: 'Gold' },
            //   { value: 59, name: 'Forecasts' }
            // ],
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$refs.chartsBody, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
