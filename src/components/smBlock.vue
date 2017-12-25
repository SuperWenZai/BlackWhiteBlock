<template>
  <div class="line">
    <div class="block" 
         v-for="(item,index,key) in numberItems" 
         :key="key">

      <div  class="block_wb" 
            :data-number="item" 
            :class="item == 1 ? 'black':'whilt'" 
            @click="change" :style="changeNum == 0 ? 'background-color:#ffffff':''">
            
            </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "block",

  data() {
    return {
      changeNum : 1,    //点击黑block时变成白的数字变化
      numberItems : [], //link的数据
      numTime : 1       //点击黑block产出
    };
  },

  props: {
    numbers: {
      default: [],
      type: Array
    }
  },

  created(){
    this.numberItems = this.numbers;

    console.log(this.numberItems)
  },

  methods: {

    change(e) {
      let _ = this;
      let blockClick = e.target.dataset.number;

      if(blockClick == 0) {
        console.log("游戏结束!")
        return;
      }

      if(blockClick == 1) {
        _.changeNum = 0;
        
       _.$emit('propNum', _.numTime);
      }

    }
  }
};
</script>

<style lang="less">
.line {
  display: black;
  width: 100%;
  height: 20%;
  .block {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    .block_wb {
      width: 100%;
      height: 100%;
    }
    .whilt {
      background-color: #ffffff;
    }
    .black {
      background-color: #333333;
    }
  }
}
</style>

