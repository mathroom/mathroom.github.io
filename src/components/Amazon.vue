<template>
  <div class="amazon-container">
    <h1>亚马逊物流配送费用</h1>
    <div class="amazon">
      <el-form :model="amazon" label-width="150px" class="demo-ruleForm">
        <el-form-item label="重量(W)-LBS:" prop="w">
          <el-input type="text" v-model="amazon.w" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="最长边（L）-inch:" prop="l">
          <el-input type="text" v-model="amazon.l" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="次长边(D) -inch:" prop="d">
          <el-input type="text" v-model="amazon.d" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="最短边(H) -inch:" prop="h">
          <el-input type="text" v-model="amazon.h" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="月份(H) -month:" prop="t">
          <el-input type="text" v-model="amazon.t" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-card class="box-card">
        <div class="blue">
          w={{amazon.w}},l={{amazon.l}},d={{amazon.d}},h={{amazon.h}},t={{amazon.t}}
        </div>
        <div class="red">
          产品尺寸分段-P(n):{{p}}
        </div>
        <div class="red">
          快递费用:{{fee}}美元
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  import amazon from "../lib/amazon";
  export default {
    data() {
      return {
        amazon: {
          w: 0,
          l: 0,
          d: 0,
          h: 0,
          t: 1,
        }
      }
    },
    computed: {
      p() {
        const p = amazon.amazon_segment(this.amazon.w, this.amazon.l, this.amazon.d, this.amazon.h);
        switch (p) {
          case "p1":
            return "小号标准尺寸-P(1)";
          case "p2":
            return "大号标准尺寸-P(2)";
          case "p3":
            return "小号大件-P(3)";
          case "p4":
            return "中号大件-P(4)";
          case "p5":
            return "大号大件-P(5)";
          case "p6":
            return "特殊大件-P(6)";
        }
      },
      fee() {
        return amazon.amazon_fee(this.amazon.w, this.amazon.l, this.amazon.d, this.amazon.h, this.amazon.t);
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.amazon-container {
  text-align: center;
}
.amazon {
  width: 50%;
  margin: 0 auto;
}
.blue {
  color:#20A0FF;
}
.red {
  color:#FF4949;
}
</style>
