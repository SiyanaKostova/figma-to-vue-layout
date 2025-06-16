<template>
  <section class="competitive-wrapper">
    <div class="competitive-container">
      <h2 class="section-title">
        Competitive Situation
        <img
          :src="infoIcon"
          alt="Info"
          class="info-icon"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-placement="top"
          data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ref="competitivePopover"
        />
      </h2>

      <h3 class="card-row">
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
      </h3>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Popover } from "bootstrap";

import infoIcon from "../../assets/icons/info.svg";
import CompetitiveSituationCard from "./CompetitiveCard.vue";

const competitivePopover = ref(null);

onMounted(() => {
  if (competitivePopover.value) new Popover(competitivePopover.value);
});
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

.card-row > * {
  flex: 1 1 calc((100% - 2 * 16px) / 3);
  min-width: 0;
}

.info-icon {
  cursor: pointer;
}
</style>
