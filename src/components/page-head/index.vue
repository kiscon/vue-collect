<template>
  <div class="page-head">
    {{pageTitle}}
  </div>
</template>
<script>
export default {
  name: 'pageHead',
  data() {
    return {
      pageTitle: this.$route.meta.title
    }
  }
}
</script>
<style lang="scss" scoped>
  .page-head {
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    line-height: 24px;
    border-bottom: 1px solid #dcdae2;
    margin-bottom: 10px;
    color: #333;
    font-weight: 600;
    font-size: 14px;
    text-align: left;
  }
</style>
