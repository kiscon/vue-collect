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
import axios from 'axios'
const RES_OK = 200
export default {
  data () {
    return {
      movieList: []
    }
  },
  created () {
    this.getMovieList()
  },
  methods: {
    getMovieList () {
      axios.post('/movieSve/getMovieList', {
        type: 'in_theaters',
        page: '1',
        count: '10'
      })
        .then((res) => {
          let data = res.data.data
          console.log(JSON.parse(data))
          if (res.data.status === RES_OK && data) {
            this.movieList = JSON.parse(data)
          } else {
            console.log('服务异常')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  filters: {
    nameFilter (datas) {
      let arr = []
      for (let data of datas) {
        arr.push(data.name)
      }
      return arr.join('、')
    }
  }
}
</script>
<style scoped>
  .list{
    margin:10px;
    display: flex;
    overflow:hidden;
  }
  .img-div{
    float: left;
    width: 150px;
    height: 200px;
    cursor: pointer;
  }
  .img-div .img{
    width: 100%;
    height: 100%;
  }
  .info-div{
    float: left;
    width: 240px;
    margin-left:20px;
  }
  .info-div .info-title{
    font-size: 20px;
  }
  .info-div p{
    padding-top:10px;
    font-size: 16px;
  }
</style>
