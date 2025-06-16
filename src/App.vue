<template>
  <div class="container-fluid px-3">
    <AppHeader />
    <router-view />
    <StickyFilters />
  </div>
  <PageFooter />
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import PageFooter from "./components/PageFooter.vue";
import StickyFilters from "./components/StickyFilters.vue";
</script>

<style scoped>
</style>
