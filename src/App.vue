<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NavFooter from './components/NavFooter.vue'
</script>

<template>
  <main>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <NavBar></NavBar>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <RouterView />
    <NavFooter></NavFooter>
  </main>
  
</template>

<style scoped>
.center {
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
