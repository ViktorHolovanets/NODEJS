<template>
  <div class="d-flex mt-3 ms-2">
    <div>
      <img :src="img_url" :style="imgBorderStyle" class="img-lib-comp"/>
    </div>
    <div class="ms-2">
      <p class="text-name-lc mb-2">{{ name }}</p>
      <p class="text-info-lc">
        {{ name_info }} <span class="ms-1 me-1" v-if="name_info !== 'Artist'">●</span> {{ name_desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img_url: String,
    name: String,
    name_info: String, // Playlist, Track, Artist
    name_desc: String, // 114 tracks, author name, else artist = null
    flag: String, // border
  },
  computed: {
    imgBorderStyle() {
      return this.flag;
    }
  }
};
</script>

<style></style>
