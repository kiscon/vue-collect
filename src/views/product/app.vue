<template>
  <div>
    <ul>
      <li v-for="(product,index) in productList" :key=index>
        <div>商品：{{product.title}}</div>
        <div>价格：{{product.price}}</div>
        <div>说明：{{product.desc}}</div>
        <div>评分：{{product.rating}}</div>
        <div>种类：{{product.categories.join('、')}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import App from "./app.js";
  export default App;
</script>
<style lang="scss" scoped>
  @import "./app.scss";
</style>
