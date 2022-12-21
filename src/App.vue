<template>
  <NavBar />

  <div class="container is-max-desktop px-2 py-4">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import NavBar from "@/components/layout/NavBar.vue";
</script>

<style>
@import url("bulma/css/bulma.min.css");
</style>
