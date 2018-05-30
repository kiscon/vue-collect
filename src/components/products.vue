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
import axios from 'axios'
export default {
  data () {
    return {
      productList: []
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      axios.get('/productSve/getProducts', {
        params: {
        }
      })
        .then((res) => {
          console.log(res)
          console.log(res.data)
          this.productList = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  padding: 10px;
}
a {
  color: #42b983;
}
</style>
