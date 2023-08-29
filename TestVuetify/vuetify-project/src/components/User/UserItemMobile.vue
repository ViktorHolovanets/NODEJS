<script setup lang="ts">
import { ref} from 'vue';
import User from "@/models/user";

const props = defineProps({
  user:{
    type:  Object as () => User,
    required: true,
  },
  edit:{
    type: Function,
    required: true,
  },
});

const user=ref<User>(props.user);
const edit=()=>{
  props.edit(user.value);
  console.log("user "+ user.value.name)
}
</script>

<template>

  <v-col cols="12" md="6" lg="4">
    <v-card
      color="#1F7087"
      theme="dark"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="w-50">
          <v-card-title class="text-h5">
            {{user.name}}
          </v-card-title>

          <v-card-subtitle>{{user.email}}</v-card-subtitle>

          <v-card-actions>
            <v-btn
              @click="edit"
              class="ms-2"
              variant="outlined"
              size="small"
              color="orange"
            >
              EDIT
            </v-btn>
          </v-card-actions>
        </div>

        <v-avatar
          class="ma-3"
          size="50%"
          rounded="0"
        >
          <v-img :src="user.avatar"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-col>
</template>
