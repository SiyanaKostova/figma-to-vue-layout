<template>
  <main class="page-content">
    <BreadcrumbSection />
    <FlashNews />
    <SalesStatus />

    <!-- Anything else (cards, charts) goes below -->
  </main>
</template>

<script setup>
import BreadcrumbSection from '../components/BreadcrumbSection.vue'
import FlashNews from '../components/FlashNews.vue'
import SalesStatus from "../components/SalesStatus.vue";
</script>
