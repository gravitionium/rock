<template>
  <div id="app">
    <div class="boxLogin">
      <div class="innerLogin">
          <el-row>
            <el-col :span="5" :offset="10">
              <div class="containerLogin">
                <h1 class="loginTitle">I AM ROCK</h1>
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="邮箱登录" name="first">
                      <div class="loginMargin">
                        <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
                      </div>
                      <div class="loginMargin">
                        <el-input placeholder="请输入内容" v-model="input11" clearable> </el-input>
                      </div>
                      <el-row>
                        <el-button type="primary" plain style="width: 100%" >登录</el-button>
                      </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="微信" name="second">微信</el-tab-pane>
                    <el-tab-pane label="钉钉" name="third">钉钉</el-tab-pane>
                    <el-tab-pane label="企业微信" name="fourth">企业微信</el-tab-pane>
                  </el-tabs>
                </template>
              </div>
            </el-col>
          </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        activeName: 'first',
        input10: '',
        input11: ''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style>
*{padding:0px;margin:0px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.boxLogin{
  /*width: 100%;*/
  /*background:url(assets/loginBg.jpg) no-repeat center center;*/
}
.innerLogin{
  padding:10% 0 10%;
}
.containerLogin{
  background:#fff;
  border-radius:5px;
  height:450px;
  padding:30px 30px 20px 30px;
  box-shadow: 3px 3px 30px #999d9c;
}
.loginTitle{
  padding:0 0 30px 0;
}
.loginMargin{
  margin-bottom:25px;
}
</style>
