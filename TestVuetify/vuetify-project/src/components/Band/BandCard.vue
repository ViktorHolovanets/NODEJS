<script setup lang="ts">
import Band from '@/models/band';
import {onMounted, ref} from "vue";
import StatsIndicator from "@/components/OtherComponents/StatsIndicator.vue";

const props = defineProps({
  item: {
    type: Object as () => Band,
    required: true
  }
});
const showCard = ref(false);

onMounted(() => {
  showCard.value = true;
});
</script>
<template>
  <v-card
    class="mx-auto"
    :to="`/band/${item.id}`"
  >
    <transition name="fab-transition">
      <v-img
        class="align-end text-white"
        height="200"
        :src="item.avatar"
        cover
        aspect-ratio="1"
      >
        <v-card-title>{{ item.name }}
          <span v-if="item.isBlocked">
            <stats-indicator icon="mdi-cancel" text-tooltip="Band is blocked" color-icon="red"/>
          </span>
        </v-card-title>
      </v-img>
    </transition>
    <v-card-actions>
      <div class="d-flex w-100 justify-space-evenly">
        <stats-indicator icon="mdi-music-circle" :text="item.countSongs.toString()" text-tooltip="Songs"/>
        <stats-indicator icon="mdi-music-box-multiple" :text="item.countAlbums.toString()" text-tooltip="Albums"/>
        <stats-indicator icon="mdi-account-music" :text="item.countMembers.toString()" text-tooltip="Members"/>
        <stats-indicator icon="mdi-account-group-outline" :text="item.countFollowers.toString()"
                         text-tooltip="Followers"/>

      </div>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>


