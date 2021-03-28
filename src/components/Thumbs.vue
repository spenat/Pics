<template>
  <div class="thumbs">
    <table>
     <tr v-for="pics1 in m_pics()" :key="pics1">
      <td v-for="pic in pics1" v-bind:key="pic" >
        <a :href="get_full_url(pic.images[0].path)">
          <img :src="get_thumb_url(pic.images[0].path)" :alt="pic.description">
        </a>
      </td>
     </tr>
    </table>
    <button v-on:click="first_page" >First</button> 
    <button v-on:click="prev_page" >Previous</button> 
    Page {{ page + 1 }} ({{ offset + 1 }} - {{ offset + per_page }})
    <button v-on:click="next_page" >Next</button> 
    <button v-on:click="last_page" >Last</button> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Thumbs',
  props: {
    subreddit: String,
    quantity: Number
  },
  data () {
    return { pics: null, page: 0 , per_page: 20, offset: 0}
  },
  methods: {
    async get_thumbs() {
        this.offset = this.page * this.per_page
        var url = '/api/pics/' + this.subreddit + '/' + this.offset +'/' + this.per_page
        axios
          .get(url)
          .then(response => (this.pics = response.data))
    },
    first_page() {
        this.page = 0
    },
    last_page() {
        this.page = Math.round(this.quantity / this.per_page)
        if (this.page * this.per_page >= this.quantity) {
            this.page = this.page - 1
        }
    },
    next_page() {
        this.page = this.page + 1
        if (this.page * this.per_page > this.quantity) this.page = 0
    },
    prev_page() {
        this.page = this.page - 1
        if (this.page < 0) this.last_page()
    },
    get_thumb_url(path) {
      return '/images/thumbs/small/' + path.substring(5)
    },
    get_full_url(path) {
      return '/images/' + path
    },
    m_pics() {
      if (this.pics !== null)
          return [
            this.pics.slice(0,5),
            this.pics.slice(5,10),
            this.pics.slice(10,15),
            this.pics.slice(15,20),
          ]
    }
  },
  watch: {
    subreddit: function () {
      if (this.subreddit !== null) {
        this.first_page()
        this.get_thumbs()
      }
    },
    page: function () {
      this.get_thumbs()
    }
  },
}
</script>

<style scoped>
div {
  background-color: #A9A9A9;
}
button {
  background-color: #627DBB;
  width: 15%;
  border: 1px solid #345799;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
button:hover {
  background-color: #345799;
}
h3 {
  margin: 40px 0 0;

}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: white;
}
td {
  background-color: #343434;
  width: 20%;
  border: 1px solid black;
}
td:hover {
  background-color: #242434;
}
</style>
