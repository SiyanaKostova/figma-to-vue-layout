<template>
  <div class="status-card">
    <div class="card-title">
      <h3 class="title-text">{{ titleParts.text }}</h3>
      <span v-if="titleParts.unit" class="title-unit">{{
        titleParts.unit
      }}</span>
    </div>

    <div class="card-content">
      <span class="card-value">{{ value }}</span>
      <div class="change-box">
        <span>{{ formattedChange }}</span>
        <img :src="arrowIcon" alt="arrow" class="arrow-icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import up from "../../assets/icons/up.svg";
import down from "../../assets/icons/down.svg";
import forward from "../../assets/icons/forward.svg";

const props = defineProps({
  title: String,
  value: String,
  change: String,
});

const arrowIcon = computed(() => {
  const n = parseFloat(props.change);
  if (n > 0) return up;
  if (n < 0) return down;
  return forward;
});

const formattedChange = computed(() => {
  const n = parseFloat(props.change);
  const sign = n > 0 ? "+" : "";
  return `${sign}${n}%`;
});

const titleParts = computed(() => {
  const idx = props.title.indexOf("(");
  if (idx !== -1) {
    return {
      text: props.title.slice(0, idx).trim(),
      unit: props.title.slice(idx),
    };
  }
  return { text: props.title, unit: "" };
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/typography";

.status-card {
  flex: 1;
  height: 116px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: 15px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid var(--color-gray-300);
  padding-bottom: 5px;
}

.title-text {
  font: $font-16-bold;
  line-height: 100%;
  color: var(--color-gray-700);
  margin-right: 4px;
}

.title-unit {
  font: $font-16-regular;
  line-height: 100%;
  color: var(--color-gray-400);
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.card-value {
  font: $font-bold $font-xl var(--font-family);
  line-height: 100%;
  color: var(--color-gray-700);
}

.change-box {
  width: 71px;
  height: 30px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);
  border-radius: 6px;
  font: $font-16-regular;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.arrow-icon {
  width: 12px;
  height: 12px;
}
</style>
