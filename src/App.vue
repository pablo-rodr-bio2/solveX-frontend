<template>
  <div class="app">
    <button @click="showAllQuotes()">Ask for quotes</button>
    <button @click="hideAllQuotes()">Ask for quotes</button>
    <div v-if="quotes">
      <QuoteList :quotes="quotes"  />
    </div>
    <div v-else>No quotes asked</div>    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref  } from 'vue';
import QuoteList from './components/QuotesList.vue'
import Quote from './types/Quote'

export default defineComponent({
  name: 'App',
  components: { QuoteList },
  setup() {

    const token = ref('')

    fetch("http://localhost:5000/api/auth")
      .then(res => res.json())
      .then(data => token.value = data.token)
    
    
    const quotes = ref<Quote[]>()

    const showAllQuotes = () => {
      fetch("http://localhost:5000/api/quotes", {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token.value
        }
      })
        .then(res => res.json())
        .then(data => quotes.value = data)
    }

    const hideAllQuotes = () => {
      quotes.value = undefined
    }

    return {  token, showAllQuotes, hideAllQuotes, quotes }
  }
});
</script>

<style>

</style>
