<template>
	<div class="rockBg">
		<transition name="fade"> 
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>	
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
	  
	},
	methods: {
	  
	}
};
</script>
<style>
.rockBg{
	width: 100%;
	background-image:url(https://file.iviewui.com/dist/ddb81d457e66ab31d3a2e7726a5b793a.png);
	position: absolute;
	top: 0px;
	bottom: 0px;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
}
/*路由切换动画*/
.fade-right-enter-active,
.fade-right-leave-active,
.fade-left-enter-active,
.fade-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.fade-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.fade-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.fade-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.fade-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>