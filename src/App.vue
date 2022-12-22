<template>
  <NavBar />

  <div class="container is-max-desktop px-2">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import NavBar from "@/components/layout/NavBar.vue";
</script>

<style>
@import url("bulma/css/bulma.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css");
</style>
