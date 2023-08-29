<template>
  <v-row justify="center" class="position-absolute">
    <v-dialog
      v-model="dialog"
      activator="auto"
      width="800"
      persistent
    >
      <v-sheet
        border="lg opacity-12"
        class="text-body-2 mx-auto"
        max-width="800"
        width="100%"
      >
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="3">
              <v-img :src="user.avatar" max-height="150" max-width="150" cover></v-img>
            </v-col>

            <v-col cols="12" md="9">
              <v-card-title>Edit User</v-card-title>
              <v-form @submit.prevent="saveUser">
                <v-text-field v-model="user.name" label="Name"></v-text-field>
                <v-text-field v-model="user.email" label="Email" type="email" required></v-text-field>
                <v-text-field v-model="vieDate" label="Birthday" :disabled="true" color="error"></v-text-field>
                <v-select
                  v-model="user.role"
                  :items="roles"
                  label="Role"
                  item-title="name"
                  item-value="id"
                  return-object
                ></v-select>
                <v-checkbox v-model="user.isEmailVerify" label="Email Verified" readonly></v-checkbox>
                <v-checkbox v-model="user.isBlocked" label="Blocked" color="error"></v-checkbox>

                <v-btn type="submit" color="primary">Save</v-btn>
                <v-btn @click="closeDialog">Cancel</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">

import {computed, ref, watch} from "vue";
import User from "@/models/user";
import {Role} from "@/models/role";
import {useAppStore} from "@/store/app";
import {useDate} from 'vuetify/labs/date'

const date = useDate()
const roles: Role[] = useAppStore().roles;
const vieDate = computed(() => {
  return date.format(user.value.birthday, 'fullDateWithWeekday')
});
const props = defineProps({
  close: {
    type: Function,
    required: true,
  },
  dialog: Boolean,
  user: {
    type: Object as () => User,
    required: true,
  },
});
const dialog = ref(props.dialog);

let originUser: User = {...props.user};
watch(() => props.dialog, (newDialog) => {
  dialog.value = newDialog;
});

const user = ref(props.user);

watch(() => props.user, (newUser) => {
  user.value = newUser;
  Object.assign(originUser, newUser);
});
const closeDialog = () => {
  Object.assign(user.value, originUser);
  props.close();
};
const saveUser = () => {
  //to do
  props.close();
};
</script>
