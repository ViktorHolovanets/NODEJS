<template>
  <v-app>
    <!-- Верхнє меню -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>MBox Adminpanel</v-toolbar-title>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-app-bar>

    <!-- Бокове меню -->
    <v-navigation-drawer class="bg-blue" app v-model="drawer">
      <AppBar/>
    </v-navigation-drawer>

    <!-- Основний вміст -->
    <View/>

    <!-- Футер -->
    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import View from "@/layouts/default/Main.vue";
import AppBar from "@/layouts/default/AppBar.vue";

const drawer = ref(false); // Стан для відкриття/закриття бокового меню
</script>

