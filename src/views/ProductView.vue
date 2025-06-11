<template>
  <main class="page-content">
    <BreadcrumbSection />
    <FlashNews />
    <SalesStatus />
    <SalesUpliftRiskSection />
    <CompetitiveSituationSection />

    <!-- Anything else (cards, charts) goes below -->
  </main>
</template>

<script setup>
import BreadcrumbSection from "../components/BreadcrumbSection.vue";
import FlashNews from "../components/FlashNews.vue";
import SalesStatus from "../components/SalesStatus/SalesStatus.vue";
import SalesUpliftRiskSection from "../components/SalesUpliftRisk/SalesUpliftRiskSection.vue";
import CompetitiveSituationSection from "../components/CompetitiveSituation/CompetitiveSituationSection.vue";
</script>
