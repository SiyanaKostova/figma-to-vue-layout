<template>
  <AppHeader />
  <router-view />
  <PageFooter />
  <StickyFilters />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import PageFooter from './components/PageFooter.vue';
import StickyFilters from './components/StickyFilters.vue';
</script>

<style>
</style>