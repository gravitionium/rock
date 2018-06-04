<template>
  <div id="app">
    <div class="boxLogin">
      <div class="innerLogin">
          <Row>
            <Col :xs="{ span: 18, offset:3 }" :sm="{ span: 10, offset: 7 }" :md="{ span: 8, offset: 8 }" :lg="{ span: 6, offset: 9 }">
              <div class="containerLogin">
                  <h1 class="loginTitle">磐石</h1>
                  <div class="loginContent">
                    <Tabs v-model="activeName" @tab-click="handleClick">
                      <TabPane label="微信" name="second">微信</TabPane>
                      <TabPane label="邮箱登录" name="first">
                        <div class="loginMargin">
                          <Input placeholder="请输入账户" size="large" v-model="username" icon="person"></Input>
                        </div>
                        <div class="loginMargin">
                          <Input placeholder="请输入密码" size="large" type=password v-model="password" icon="locked"></Input>
                        </div>
                        <Row>
                          <Button type="primary" plain style="width: 100%" class="rock-touxiang">登录</Button>
                        </Row>
                      </TabPane>
                      <TabPane label="钉钉" name="third">钉钉</TabPane>
                    </Tabs>
                  </div>  
                  <p class="loginInfo">忘记密码？<a href="#" class="loginBlue">点这里！</a></p>
              </div>
            </Col>
          </Row>
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
        username: '',
        password: ''
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
@import "../assets/icon/iconfont.css";
*{padding:0px;margin:0px;}
html{font-size:62.5%;}
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
  margin:8% auto 10%;
}
.containerLogin{
  background:#fff;
  border-radius:5px;
  height:35rem;
  padding:2rem 3rem 2rem 3rem;
  box-shadow: .3rem .3rem 3rem #999d9c;
}
.loginTitle{
  padding:0 0 30px 0;
  /*color: #409EFF;*/
  font-size: 4rem;
  letter-spacing: 5px;
  font-family: "Times New Roman",Serif;
}
.loginMargin{
  margin-bottom:20px;
}
.loginContent{
  width: 88%;
  margin: 0 auto;
}
.loginInfo{
  font-size: 1.2rem;
  color:#666;
  padding:1rem 0;
}
.loginBlue{
  color:#638fdd;
}
</style>
