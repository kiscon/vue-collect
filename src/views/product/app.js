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
      axios.get('/api/productSve/getProducts', {
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