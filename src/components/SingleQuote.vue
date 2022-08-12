<template>
  <div>
    "{{ quote }}" from {{ author }}
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    quote: {
      required: true,
      type: String
    },
    author: {
      required: true,
      type: String
    }
  }
})

</script>

<style scoped>
</style>