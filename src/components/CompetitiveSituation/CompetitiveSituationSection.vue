<template>
  <section class="competitive-wrapper">
    <div class="competitive-container">
      <div class="section-title">
        Competitive Situation
        <img :src="infoIcon" alt="info" />
      </div>

      <div class="card-row">
        <CompetitiveSituationCard
          title="Competitive Edge in Market"
          :score="80"
          :change="10"
        />
        <CompetitiveSituationCard
          title="Competitive Edge Created"
          :score="45"
          :change="-3"
        />
        <CompetitiveSituationCard
          title="Position of Strength"
          :score="81"
          :change="5"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import infoIcon from "../../assets/icons/info.svg";
import CompetitiveSituationCard from "./CompetitiveCard.vue";
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
  /* no fixed height — let contents flow */
}

.section-title {
  font: $font-20-bold;
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-row {
  margin-top: 20px;
  display: flex;
  gap: 16px;
}

/* ensure each card is 1/3 of the row (minus the two gutters) */
.card-row > * {
  flex: 1 1 calc((100% - 2 * 16px) / 3);
  min-width: 0; /* prevents overflow */
}
</style>
