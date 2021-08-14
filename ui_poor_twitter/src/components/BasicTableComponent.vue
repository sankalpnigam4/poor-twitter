<template>
  <div>
    <md-table class="tweet-table"  v-model="all_tweets" :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder" :md-sort-fn="customSort" md-card>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell class="table-cell" md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell class="table-cell" md-label="Tweet">{{ item.text }}</md-table-cell>
        <md-table-cell class="table-cell" md-label="DateTime" md-sort-by="date_time">{{ item.date_time }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<style scoped>
  .table-cell {
    text-align: left;
  }
  .tweet-table {
    margin:2% 10% 0 10%;
  }
</style>

<script>
  import helper from '../helper/apilist'

  export default {
    name: 'TableBasic',
    data () {
      return {
        all_tweets:[],
        currentSort: 'name',
        currentSortOrder: 'asc',
      }
    },
    methods: {
      tweetFunction() {
        helper.getTweets().then( response => {
          this.all_tweets = response;
        })
        setTimeout(()=> this.tweetFunction(), 10000);
      },
      customSort (value) {
        return value.sort((a, b) => {
          const sortBy = this.currentSort

          if (this.currentSortOrder === 'desc') {
            return a[sortBy].localeCompare(b[sortBy])
          }

          return b[sortBy].localeCompare(a[sortBy])
        })
      }
    },
    beforeMount () {
      this.tweetFunction()
    }
    
  }
</script>