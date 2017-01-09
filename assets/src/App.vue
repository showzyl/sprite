<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">试试看布局</div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>

    <el-button type="primary" @click="hehe">主要按钮</el-button>

    <div id="test" style="width: 600px;height: 300px;">
      我是测试
    </div>

  </div>
</template>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
//  var echarts = require('echarts');
  import echarts from 'echarts'

  export default {
    data () {
      return {
        msg: 'Use Vue 2.0 Today!'
      }
    },
    created(){
      let l = 'hehe';
      console.log(`测试${l}`);
      setTimeout(function () {
        var myChart = echarts.init(document.getElementById('test'));
        myChart.setOption({
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }, 5)

    },
    methods: {
      startHacking () {
        this.$notify({
          title: 'It Works',
          message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
          duration: 6000
        })
      },
      hehe(){

        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })

      }
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>