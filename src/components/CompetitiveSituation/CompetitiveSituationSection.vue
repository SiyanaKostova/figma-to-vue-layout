<template>
  <section class="competitive-wrapper">
    <div class="competitive-container">
      <div class="section-title">
        Competitive Situation
        <img :src="infoIcon" alt="info" />
      </div>

      <!-- Three cards will go here next -->
      <div class="card-row">
        <!-- We'll insert CompetitiveSituationCard components here later -->
      </div>
    </div>
  </section>
</template>

<script setup>
import infoIcon from "../../assets/icons/info.svg";
</script>

<style scoped lang="scss">
@import "../../assets/scss/typography";

.competitive-wrapper {
  margin: 20px 97px 0 97px;
}

.competitive-container {
  background-color: var(--color-gray-25);
  border: 1px solid var(--color-gray-300);
  border-radius: 20px;
  padding: 20px;
  height: 256px;
}

.section-title {
  font: $font-20-bold;
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Reserve space for cards (to be implemented next) */
.card-row {
  margin-top: 20px;
  display: flex;
  gap: 16px;
}
</style>
