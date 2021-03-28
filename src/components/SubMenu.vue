<template>
 <div class="submenu">
  <h3>Subreddits</h3>
   <ul>
    <div class="scroll">
     <li v-for="sub in subreddits" :key="sub" v-on:click="setThisSubreddit(sub)">
      {{ sub }}
     </li>
    </div>
   </ul>
  <h3 class="bottom">{{ total }}</h3>
 </div>
</template>

<script>

export default {
  name: 'SubMenu',
  props: {
    subreddits: String,
    setSubreddit: Function
  },
  methods: {
    setThisSubreddit: function (key) {
      this.setSubreddit(key);
    },
    async getTotal () {
      var url = '/api/subreddit/total_images'
      const res = await fetch(url)
      const total_obj = await res.json()
      this.total = total_obj.total
    }
  },
  data () {
    return {pics: null, total: null}
  },
  mounted () {
    this.getTotal()
  }
}
</script>

<style scoped>
div {
  background-color: #A9A9A9;
  overflow:hidden;
}
div.scroll {
  overflow-x: hidden;
  overflow-y: auto;
  height: 450px;
  background-color: #B2B2B2;
}

h3 {
  margin: 0 0 0;
  color: black;
  background-color: #999999;
  border-radius: 15px 15px 0 0;
  padding: 10px 0 10px;
}
h3.bottom {
  margin: 0 0 0;
  color: black;
  background-color: #999999;
  border-radius: 0 0 15px 15px;
  padding: 10px 0 10px;
  font-size: 15px;
}
ul {
  list-style-type: none;
  padding: 10px 0 10px;
}
li {
  background-color: #B2B2B2;
  padding: 2px 0 2px;
}
li:hover {
  background-color: #345799;
  color: white;
}
a {
  color: #42b983;
}
</style>
