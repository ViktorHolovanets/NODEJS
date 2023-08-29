<template>
  <header-page title="users"/>
  <v-table>
    <v-table class="d-none d-lg-block">
      <thead class="bg-blue-grey-lighten-1 pa-0">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Birthday</th>
        <th>Role</th>
        <th>Is Email Verified</th>
        <th>Is Blocked</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <UserItem v-for="user in users" :key="user.id" :user="user" :edit="openModal"/>
      </tbody>
    </v-table>
    <tfoot class="d-lg-none">
    <v-row>
      <UserItemMobile
        v-for="user in users"
        :key="user.id"
        :user="user"
        :edit="openModal"
      />
    </v-row>
    </tfoot>
  </v-table>
  <user-modal v-if="dialog" :user="editedUser??users[0]" :dialog="dialog" :close="closeModal"/>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import UserItem from '@/components/User/UserItem.vue';
import User from '@/models/user';
import UserItemMobile from '@/components/User/UserItemMobile.vue';
import UserModal from '@/components/User/UserModal.vue';
import {useAppStore} from '@/store/app';
import HeaderPage from "@/components/OtherComponents/HeaderPage.vue";

const dialog = ref(false);
const editedUser = ref<User | null>(null);
const openModal = (user: User) => {
  editedUser.value = user;
  dialog.value = true;
};
const closeModal = () => dialog.value = false;

const users = ref<User[]>(useAppStore().users);
</script>
