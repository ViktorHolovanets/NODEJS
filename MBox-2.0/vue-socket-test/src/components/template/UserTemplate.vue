<template>
  <div class="music-template mt-3 ms-2">
    <div class="d-flex justify-content-center">
      <img :src="img_url" class="rounded-circle img-ut"/>
    </div>
    <div class="ms-2 mt-3 d-block">
      <p class="text-name-ut mb-2">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img_url: String,
    name: String,
  },
};
</script>

<style></style>
