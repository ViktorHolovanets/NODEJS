<script setup lang="ts">

import Band from "@/models/band";
import {ref} from "vue";
import BandCard from "@/components/Band/BandCard.vue";
import {useAppStore} from "@/store/app";
import HeaderPage from "@/components/OtherComponents/HeaderPage.vue";

const bands = ref<Band[]>(useAppStore().bands)
</script>

<template>
  <v-container>
    <v-row class="pa-3">
      <header-page title="BANDS"/>
      <v-col
        cols="12" md="6" lg="4"
        v-for="band in bands" :key="band.id">
        <band-card :item="band"/>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>
