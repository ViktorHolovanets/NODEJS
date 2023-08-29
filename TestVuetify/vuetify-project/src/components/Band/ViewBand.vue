<script setup lang="ts">
import Band from "@/models/band";
import {ref} from "vue";
import {useRoute} from 'vue-router';
import {useAppStore} from '@/store/app';
import Cards from "@/components/OtherComponents/Cards.vue";

const route = useRoute();
const id = ref(route.params.id);
const bands = useAppStore().bands;
const band = ref<Band>(bands.find(band => band.id === id.value));
</script>
<template>
  <v-container>
    <cards :title="band.name" :img="band.avatar" :subtitle="band.fullInfo"/>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="column-card">
          <v-card-title>Column 1</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <template v-slot:default="{ expanded }">
                <v-row no-gutters>
                  <v-col cols="4" class="d-flex justify-start">
                    News
                  </v-col>
                  <v-col
                    cols="8"
                    class="text-grey"
                  >
                    <v-fade-transition leave-absolute>
                <span
                  v-if="expanded"
                  key="0"
                >
                  Enter a name for the trip
                </span>
                      <span
                        v-else
                        key="1"
                      >
                   trip.name
                </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-text-field
                hide-details
                placeholder="Caribbean Cruise"
              ></v-text-field>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="column-card">
          <v-card-title>Column 3</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.column-card {
  margin-bottom: 1rem;
}
</style>
