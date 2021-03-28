<template>
 <div class="rounded">
  <table>
   <tr>
    <td id="submenu">
     <SubMenu :subreddits="items" :setSubreddit="setSubreddit" />
    </td>
    <td id="thumbs">
     <Subreddits :sub_name="current_subreddit" />
    </td>
   </tr>
  </table>
 </div>
</template>

<script>
import axios from 'axios'
import Subreddits from './components/Subreddits.vue'
import SubMenu from './components/SubMenu.vue'

export default {
  name: 'App',
  components: {
    SubMenu,
    Subreddits,
  },
  data () {
    return { items: null, current_subreddit: null}
  },
  methods: {
    setSubreddit (subreddit) {
      this.current_subreddit = subreddit
    }
 
  },
  watch: {
    items: function() {
      this.current_subreddit = this.items[0]
    }
  },
  mounted () {
    axios
      .get('/api/subreddit/')
      .then(response => (this.items = response.data))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #345799;
  margin: 1.5vh 1vh 1vh 1vh;
}
body {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
div.rounded {
  border-radius: 20px;
  padding: 20px 20px 0 20px;
  background-color: #A9A9A9;
}
table {
  width:100%;
  border-collapse:collapse;
  padding:0;
}
tr {
  background-color: #A9A9A9;
}
#submenu {
  width:20%;
  background-color: #A9A9A9;
  display:table-cell;
  vertical-align:middle;
  padding : 0 20px 0 0;
}
#thumbs {
  width:80%;
  background-color: #A9A9A9;
  display:table-cell;
  vertical-align:top;
}
</style>
