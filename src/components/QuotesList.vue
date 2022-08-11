<template>
  <div class="quote-list">
    <ul>
      <li v-for="quote in quotes" :key="quote.id">
        <h3>"{{ quote.quote }}", from {{ quote.author }}</h3>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import QuoteType from '@/types/Quote';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    quotes: {
      required: true,
      type: Array as PropType<QuoteType[]>
    }
  }
})
</script>

<style scoped>
</style>