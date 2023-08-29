<script setup lang="ts">

const props = defineProps({
  text: String,
  textTooltip: String,
  icon:{
    type: String,
    required: true
  },
  colorIcon:String,
});
</script>

<template>
  <div class="d-inline">
    <span class="me-1"></span>
    <v-badge :content="text" color="transparent">
      <v-icon class="me-1" :icon="icon" :color="colorIcon"></v-icon>
    </v-badge>
    <v-tooltip
      activator="parent"
      location="bottom"
    >{{ textTooltip }}
    </v-tooltip>
  </div>
</template>

<style scoped>

</style>
