import axios from 'axios'
const RES_OK = 200
export default {
  data () {
    return {
      movieList: []
    }
  },
  created () {
  },
  mounted() {
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