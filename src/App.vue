<template>
  <div class="app">
    <button @click="showAllQuotes()">Ask for quotes</button>
    <button @click="isVisible = !isVisible">Toogle all quotes</button>
    <p>Quotes are enabled: {{ isVisible }}</p>
    <div v-if="isVisible">
      <div v-if="quotes">
        <QuoteList :quotes="quotes" />
      </div>
      <div v-else>No quotes asked</div>    
    </div>
    
        
  </div>
</template>

<script lang="ts">
import { defineComponent, ref  } from 'vue';
import QuoteList from './components/QuotesList.vue'
import Quote from './interface/Quote'
import { getAllQuotes, getToken } from './service';

export default defineComponent({
  name: 'App',
  components: { QuoteList },
  setup() {

    const isVisible = ref(true)

    const token = ref('')

    async () => {
      let token = await getToken()
      token.value = token.token
    }

    fetch("http://localhost:5000/api/auth")
      .then(res => res.json())
      .then(data => token.value = data.token)
    
    
    const quotes = ref<Quote[]>()

    const showAllQuotes = async() => {
      let data = await getAllQuotes(token.value)
      quotes.value = data
    }

    return {  token, isVisible, quotes, showAllQuotes }
  }
});
</script>

<style>

</style>
