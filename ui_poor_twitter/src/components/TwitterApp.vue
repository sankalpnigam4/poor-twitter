<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <md-field class="name-field">
        <label>Name</label>
        <md-input v-model="user_name" maxlength="20"></md-input>
      </md-field>

      <md-field class="tweet-field">
        <label>Tweet Here!! Oh Dear</label>
        <md-textarea v-model="user_text" maxlength="50" md-autogrow></md-textarea>
      </md-field>

      <md-button class="md-dense md-raised md-primary tweet-button" @click="postTweet">tweet</md-button>
    </div>
    <TableBasic/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import TableBasic from './BasicTableComponent.vue'
import helper from '../helper/apilist'


Vue.use(VueMaterial)

  export default {
    name: 'TwitterApp',
    user_name: '',
    user_text: '',
    props: {
      msg: String
    },
    components: {
      TableBasic
    },
    methods: {
      postTweet() {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+'T'+time;
        let tweetMessage = {
          'name': this.user_name,
          'text': this.user_text,
          'date_time': dateTime
        }
        console.log(dateTime);
        helper.postTweet(tweetMessage).then(response => {
          let addedText = response;
          console.log('Message saved' + addedText);
        }).catch(()=> {
        });
      }
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .name-field {
    width: 15%;
    float: left;
    margin-left: 10%;
    margin-right: 2%;
  }
  .tweet-field {
    width: 40%;
    display: inline-block;
  }
  .tweet-button {
    float: right;
    margin-right: 15%;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
