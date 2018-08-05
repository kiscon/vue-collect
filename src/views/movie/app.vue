<template>
  <div style="display:flex; flex-wrap:wrap">
    <div v-for="item in movieList.subjects" :key="item.id" class="list">
      <div class="img-div"><img :src="item.images.small" alt="" class="img"/></div>
      <div class="info-div">
        <h2 class="info-title">{{item.title}}</h2>
        <p class="info-genres">类型：{{item.genres.join('、')}}</p>
        <p>导演：{{item.directors | nameFilter}}</p>
        <p>主演：{{item.casts | nameFilter}}</p>
        <p class="info-year">上映年份：{{item.year}}</p>
        <p class="info-rating">评分：{{item.rating.average}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import App from "./app.js";
  export default App;
</script>
<style lang="scss" scoped>
  @import "./app.scss";
</style>
