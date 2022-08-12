<template>
  <div class="quote-list">
    <ul>
      <li v-for="quote in quotes" :key="quote.id">
        <Quote :quote="quote.quote" :author="quote.author" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import QuoteType from '@/interface/Quote';
import { defineComponent, PropType } from 'vue'
import Quote from './SingleQuote.vue';

export default defineComponent({
    props: {
        quotes: {
            required: true,
            type: Array as PropType<QuoteType[]>
        }
    },
    components: { Quote }
})
</script>

<style scoped>
</style>