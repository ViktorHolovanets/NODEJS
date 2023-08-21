<template>
    <div class="genre-tp">
      <div :style="colorFlag" class="rounded w-100 h-100 d-flex align-items-center justify-content-center">
        <p class="text-genres-tp">{{ name }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      color: String, // background color
    },
    computed: {
      colorFlag() {
        return `background:${this.color};`;
      }
    }
  };
  </script>
  
  <style></style>
  