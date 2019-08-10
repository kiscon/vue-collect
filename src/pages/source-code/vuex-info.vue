<template>
  <div>
    <pageHead />
    <ul>
      <li>{{userInfo.userName}}</li>
      <li>{{userInfo.userMobile}}</li>
    </ul>
    <button @click="changeData">改变数据</button>
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
      changeData() {
        this.SET_USER({...this.userInfo, ...{userName: 'vuex', userMobile: Date.now()}})
      },
      ...mapMutations(['SET_USER'])
    }
  }
</script>
<style lang="scss" scoped>
</style>
