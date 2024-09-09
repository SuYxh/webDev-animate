<script setup>
import {onMounted, ref} from "vue";
import * as echarts from 'echarts'
import 'echarts/theme/macarons'
import dayjs from 'dayjs'

const barRef = ref(null)

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
};

const data = []
const dayNumber = 7
for (let i = dayNumber; i > 0; i--) {
  const activeCount = random(1, 200)
  const startCount = random(1, activeCount)
  data.push({
    date: dayjs().subtract(i, 'day').format('YYYY-MM-DD'),
    activeCount,
    startCount,
    startRate: +((startCount / activeCount) * 100).toFixed(2)
  })
}
console.log(data)
onMounted(() => {
  const chart = echarts.init(barRef.value, 'macarons')
  const chartWidth = chart.getDom().offsetWidth
  const dataLength = data.length
  // 根据数据的数量和图表的宽度计算每个柱子的宽度
  const barWidth = Math.floor(chartWidth / dataLength * 0.5)
  // const barWidth = 20
  chart.setOption({
    title: {
      text: '备注：日开工率=开工台数/激活台数',
      left: 'center',
      bottom: 0,
      textStyle: {
        fontSize: 14,
        color: '#000'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['激活台数', '开工台数', '开工率']
    },
    xAxis: [
      {
        type: 'category',
        data: data.map(value => value.date),
        axisLine: {
          lineStyle: {
            color: '#333'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        },
        axisLine: {
          lineStyle: {
            color: '#333'
          }
        }
      },
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}%'
        },
        axisLine: {
          lineStyle: {
            color: '#333'
          }
        }
      }
    ],
    series: [
      {
        type: 'bar',
        name: '激活台数',
        // stack: 'total',
        barWidth,
        barGap: '-75%',
        data: data.map(value => value.activeCount)
      },
      {
        type: 'bar',
        name: '开工台数',
        // stack: 'total',
        barWidth: barWidth * 0.5,
        data: data.map(value => value.startCount),
        color: 'rgba(248,161,63,1)'
      },
      {
        type: 'line',
        yAxisIndex: 1,
        name: '开工率',
        data: data.map(value => value.startRate)
      }
    ]
  })
})
</script>

<template>
  <div ref="barRef"></div>
</template>

<style scoped>
div {
  width: 600px;
  height: 360px;
}
</style>
