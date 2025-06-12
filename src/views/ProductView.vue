<template>
  <main class="page-content">
    <BreadcrumbSection />
    <FlashNews />
    <SalesStatus />
    <SalesUpliftRiskSection />
    <CompetitiveSituationSection />
    <StickyFilters />
  </main>
</template>

<script setup>
import BreadcrumbSection from "../components/BreadcrumbSection.vue";
import FlashNews from "../components/FlashNews.vue";
import SalesStatus from "../components/SalesStatus/SalesStatus.vue";
import SalesUpliftRiskSection from "../components/SalesUpliftRisk/SalesUpliftRiskSection.vue";
import CompetitiveSituationSection from "../components/CompetitiveSituation/CompetitiveSituationSection.vue";
import StickyFilters from "../components/StickyFilters.vue";
</script>