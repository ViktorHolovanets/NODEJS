<script setup lang="ts">
const props = defineProps({
  title:{
    type: String,
    required: true
  },
});
</script>

<template>
  <v-col cols="12">
    <div class="title text-uppercase text-h4">
      {{title}}
    </div>
  </v-col>
</template>

<style scoped>

</style>
