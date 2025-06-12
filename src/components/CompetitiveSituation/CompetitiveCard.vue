<template>
  <div class="card-wrapper">
    <div class="card-title-row">
      <span class="card-title">{{ title }}</span>
      <img :src="infoIcon" alt="info" />
    </div>

    <div class="separator"></div>

    <div class="score-row">
      <span class="score">{{ score }}</span>
      <div class="change-box">
        <span :class="{ positive: change >= 0, negative: change < 0 }">
          {{ change > 0 ? '+' : '' }}{{ change }}
        </span>
        <img :src="arrowIcon" alt="arrow" />
      </div>
    </div>

    <div class="progress-bar">
      <div class="bar" :style="barStyle"></div>
    </div>

    <div class="labels">
      <div class="label-left">
        <span class="score-label">0</span>
        <span class="desc-label">Weak</span>
      </div>
      <div class="label-right">
        <span class="desc-label">Strong</span>
        <span class="score-label">100</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import infoIcon  from '../../assets/icons/info.svg'
import arrowIcon from '../../assets/icons/arrow_bl.svg'
import { computed } from 'vue'

const props = defineProps({
  title:  String,
  score:  Number,
  change: Number
})

const barStyle = computed(() => {
  const pct        = Math.min(Math.max(props.score, 0), 100)
  const startColor = props.score < 50
    ? 'var(--color-yellow-100)'
    : 'var(--color-primary-800)'
  const endColor   = props.score < 50
    ? 'var(--color-yellow-200)'
    : 'var(--color-primary-700)'

  return {
    width:      `${pct}%`,
    background: `linear-gradient(to right, ${startColor}, ${endColor})`,
     backgroundRepeat:'no-repeat'
  }
})
</script>

<style scoped lang="scss">
@import "../../assets/scss/typography";

.card-wrapper {
  height: 172px;
  background: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: $font-20-bold;
  color: var(--color-gray-700);
}

.separator {
  height: 1px;
  background-color: var(--color-gray-300);
  margin: 8px 0;
}

.score-row {
  display: flex;
  align-items: center;
  gap: 15px;
}

.score {
  font: 700 35px var(--font-family);
  color: var(--color-gray-700);
}

.change-box {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  height: 30px;
  border-radius: 6px;
  background: var(--color-gray-25);
  font: $font-16-regular;
  border: 1px solid var(--color-gray-300);
}

.progress-bar {
  position: relative;
  height: 10px;
  background: var(--color-gray-200);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 8px;
}

.bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 10px;
}

.labels {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 8px;

  > div {
    display: flex;
    align-items: baseline;
    gap: 5px;               
    white-space: nowrap;
  }
}

.score-label {
  font: 700 14px var(--font-family);
  color: var(--color-gray-400);
}

.desc-label {
  font: 400 10px var(--font-family);
  color: var(--color-gray-400);
}
</style>
