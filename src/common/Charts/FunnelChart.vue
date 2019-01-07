<template>
  <div>
    <div :style="{height:height,width:width}" ref="chartsBody"></div>
  </div>
</template>

<script>
/**
 * 金字塔型图表
 */
  import echarts from 'echarts';
import {debounce} from "../../utils/tools";
  require('echarts/theme/macarons') // echarts theme
  export default {
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '300px'
      },
      autoResize: {
        type: Boolean,
        default: true
      },
      chartData: {
        type: Array
      },
      title: {
        type: String
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart()
      if (this.autoResize) {
        this.__resizeHanlder = debounce(() => {
          if (this.chart) {
            this.chart.resize()
          }
        }, 100)
        window.addEventListener('resize', this.__resizeHanlder)
      }
      // 监听侧边栏的变化
      const sidebarElm = $('.main-sidebar')
      sidebarElm.on('transitionend', this.__resizeHanlder)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      if (this.autoResize) {
        window.removeEventListener('resize', this.__resizeHanlder)
      }
      const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
      sidebarElm&&sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)
      this.chart.dispose()
      this.chart = null
    },
    watch: {
      chartData: {
        deep: true,
        handler(val) {
          this.setOptions(val)
        }
      }
    },
    methods: {
      setOptions(data=[]) {
        console.log(this.title);
        this.chart.setOption({
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
              show:false
            },
            calculable: true,
            series: [
              {
                name:'数值',
                type:'funnel',
                left:0,
                top: 0,
                //x2: 80,
                bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                  normal: {
                    show: true,
                    position: 'outside'
                  },
                  emphasis: {
                    textStyle: {
                      fontSize: 12
                    }
                  }
                },
                labelLine: {
                  normal: {
                    length: 10,
                    lineStyle: {
                      width: 1,
                      type: 'solid'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                  }
                },
                data
              }
            ]
          }

        )
      },
      initChart() {
        this.chart = echarts.init(this.$refs.chartsBody, 'macarons')
        this.setOptions(this.chartData)
      }
    }
  }
</script>

