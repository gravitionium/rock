<template>
  <div id="app">
    <div class="innerLogin">
        <Row>
          <Col :xs="{ span: 18, offset:3 }" :sm="{ span: 10, offset: 7 }" :md="{ span: 8, offset: 8 }" :lg="{ span: 6, offset: 9 }">
            <div class="containerLogin">
                <h1 class="loginTitle">磐石</h1>
                <div class="loginContent">
                    <div class="loginMargin">
                      <Input placeholder="昵称" size="large" v-model="username" icon="person"></Input>
                    </div>
                     <div class="loginMargin">
                      <Input placeholder="登录邮箱" size="large" v-model="email" icon="email"></Input>
                    </div>
                    <div class="loginMargin">
                      <Input placeholder="密码" size="large" type=”password“ v-model="password" icon="key"></Input>
                    </div>
                    <div class="loginMargin">
                      <Input placeholder="确认密码" size="large" type=”password“ v-model="rePassword" icon="key"></Input>
                    </div>
                    <Row>
                      <Button type="primary" plain style="width: 100%" class="rock-touxiang">确认</Button>
                    </Row>
                </div>  
                <p class="loginInfo">点击注册表示你已阅读并同意<span>服务条款</span></p>

                <div class="loginBottom">
                  <p>已有账号？
                    <router-link to="/" class="loginBlue">现在登录！</router-link>
                  </p>
                </div>
            </div>
          </Col>
        </Row>
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
.innerLogin{
  padding:12% 0 10%;
}
.containerLogin{
  background:#fff;
  border-radius:5px;
  padding: 1rem 0 0;
  box-shadow: .3rem .3rem 3rem #999d9c;
}
.loginTitle{
  font-size: 3.4rem;
  letter-spacing: 5px;
  font-family: "Times New Roman",Serif;
  padding:1.2rem 0 2.2rem 0;
}
.loginMargin{
  margin-bottom:20px;
}
.loginContent{
  width: 75%;
  margin: 0 auto;
}
.loginInfo{
  font-size: 1.2rem;
  color:#333;
  padding:1.5rem 0;
}
.loginBlue{
  color: #2d8cf0;
}
.loginBottom{
  text-align: center;
  padding: 1.2rem 0;
  border-top: 1px solid #ececec;
}
.loginBottom>p{
  color: #000;
}
.loginOtherTitle{
  color: #fff;
  padding: 2rem 0;
  font-weight: 500;
  cursor: pointer;
}
.loginOtherBtn{
  background: #405a97;
  padding: .8rem 0;
  font-size: 1.6rem;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
.loginOtherBtn:hover{
  background: #57a3f3;
}
</style>
