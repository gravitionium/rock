<template>
  <div id="app">
    <div class="boxLogin">
      <div class="innerLogin">
          <Row>
            <Col :xs="{ span: 22, offset:1 }" :sm="{ span: 18, offset: 3 }" :md="{ span: 10, offset: 7 }" :lg="{ span: 8, offset: 8 }">
              <div class="containerLogin">
                <h1 class="loginTitle">磐石</h1>
                  <div class="loginContent">
                    <Tabs v-model="activeName" @tab-click="handleClick">
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
                      <TabPane label="微信" name="second">微信</TabPane>
                      <TabPane label="钉钉" name="third">钉钉</TabPane>
                      <TabPane label="企业微信" name="fouth">企业微信</TabPane>
                    </Tabs>
                  </div>                
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
  padding:5% 0 10%;
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
  /*color: #409EFF;*/

  font-size: 40px;
  letter-spacing: 5px;
  font-family: "Times New Roman",Serif;
}
.loginMargin{
  margin-bottom:20px;
}
.loginContent{
  width: 71%;
  margin: 0 auto;
}
</style>
