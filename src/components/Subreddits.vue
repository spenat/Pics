<template>
  <div class="subreddits">
    <h1>{{ sub_name }}</h1>
    <h3>{{ quantity }}</h3>
     <Thumbs :subreddit="subreddit" :quantity="quantity" /> 
  </div>
</template>

<script>
// import axios from 'axios'
import Thumbs from './Thumbs.vue'

export default {
  name: 'Subreddits',
  components: {
    Thumbs,
  },
  props: {
    sub_name: String
  },
  data () {
    return  { subreddits: null, subreddit: this.sub_name, quantity: null }
  },
  methods: {
    async get_pics (subreddit) {
      var url = '/api/subreddit/' + subreddit;
      const res = await fetch(url)
      const sub_obj = await res.json()
      this.quantity = sub_obj.quantity
      this.subreddit = subreddit
    },
    get_sub_name: function() {
      return this.sub_name
    }
  },
  watch: {
    sub_name: function () {
      this.get_pics(this.sub_name)
    }
  },
  mounted () {
    this.get_pics(this.sub_name);
  },
}
</script>

<style scoped>
div {
  background-color: #A9A9A9;
}
h1 {
  margin: 0 0 0;
  color: black;
  background-color: #999999;
  border-radius: 15px 15px 0 0;
  padding: 15px 5px 15px;
}
h3 {
  margin: 0 0 0;
  color: #343434;
  background-color: #A1A1A1;
  font-size: 14px;
  padding: 10px 0 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
