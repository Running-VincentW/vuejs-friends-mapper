<template>
  <div class="home">
    <FriendList v-bind:friends="friends"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FriendList from '@/components/FriendList.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    FriendList
  },
  data(){
    return {
      friends: []
    }
  },
  methods:{

  },
  created(){
    axios.get('https://next.json-generator.com/api/json/get/41P1_UhSI')
    .then(res => this.friends = res.data)
    .catch(err => console.log(err));
  }
}
</script>
