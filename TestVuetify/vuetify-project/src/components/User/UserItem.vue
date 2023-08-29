<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import {useAppStore} from '@/store/app';
import User from "@/models/user";
import {Role} from "@/models/role";
import {useDate} from "vuetify/labs/date";

const roles: Role[] = useAppStore().roles;
const date = useDate()
const props = defineProps({
  user: {
    type: Object as () => User,
    required: true,
  },
  edit:{
    type: Function,
    required: true,
  },
});

const user = ref<User>({...props.user});
const userSave = ref<User>(props.user);
const isEdit = computed(() => {
  return JSON.stringify(user.value) !== JSON.stringify(userSave.value);
});
watch(props.user,(newProps)=>{
  Object.assign(user.value, newProps);
})
const edit=()=>{
  props.edit(userSave.value);
}
const vieDate = computed(() => {
  return date.format(user.value.birthday, 'fullDateWithWeekday')
});
const save = () => {
  // TO DO
  Object.assign(userSave.value, user.value)
}

</script>

<template>
  <tr>
    <td>
      <v-avatar :image="user.avatar" size="50"></v-avatar>
    </td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ vieDate }}</td>
    <td>
      <v-select
        :items="roles"
        v-model="user.role"
        item-title="name"
        item-value="id"
        return-object
        variant="solo"
        density="comfortable"
      ></v-select>
    </td>
    <td>{{ user.isEmailVerify }}</td>
    <td>
      <v-checkbox
        v-model="user.isBlocked"
      ></v-checkbox>
    </td>
    <td>
      <v-btn variant="plain" @click="save" :disabled="!isEdit">
        <v-icon
          size="large"
          :color="isEdit ? 'green' : 'red'"
          icon="mdi-content-save-check"
        ></v-icon>
      </v-btn>

      <v-btn variant="plain" @click="edit" >
        <v-icon
          size="large"
          color="orange"
          icon="mdi-account-edit"
        ></v-icon>
      </v-btn>
    </td>
  </tr>
</template>
