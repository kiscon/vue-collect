<template>
  <div>
    <pageHead />
    <div class="user-info">
      <h3 class="title-block">用户信息</h3>
      <ul v-outsideclick="handleDirective">
        <li>{{userInfo.userName}}</li>
        <li>{{userInfo.userMobile}}</li>
      </ul>
      <button class="btn" @click="changeData">改变数据</button>
    </div>
    <div class="info-box">
      <h3 class="title-block">1.什么是vuex</h3>
      <div class="content-block">
        一个专为Vue服务的状态管理模式，管理组件之间数据传输和方法管理。<br>
        vue组件接收交互行为，调用dispatch方法触发action相关处理；
        若页面状态需要改变，则调用commit方法提交mutation修改state；
        通过getters获取到state新值，重新渲染Vue Components，界面随之更新。
      </div>
      <h3 class="title-block">2：什么场景用vuex</h3>
      <div class="content-block">
        应用遇到多个组件共享状态时<br>
        涉及非父子组件之间跨组件共享数据<br>
        多个页面都能修改同一个数据<br>
      </div>
      <h3 class="title-block">3：vuex刷新后数据不变怎么解决</h3>
      <div class="content-block">
        可以使用sessionStorage、localStorage、IndexDB
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted() {
      console.log(this.userInfo)
    },
    methods: {
      handleDirective() {
        console.log('自定义指令')
      },
      changeData() {
        this.SET_USER({...this.userInfo, ...{userName: 'vuex', userMobile: Date.now()}})
      },
      ...mapMutations(['SET_USER'])
    },
  }
</script>
<style lang="scss" scoped>
  .user-info {
    li {
      line-height: 26px;
    }
  }

  .btn {
    margin-top: 4px;
  }
</style>
