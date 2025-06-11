<template>
  <div class="status-card">
    <div class="card-title">
      <span class="title-text">{{ titleParts.text }}</span>
      <span v-if="titleParts.unit" class="title-unit">{{ titleParts.unit }}</span>
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
import { computed } from 'vue'
import up from '../assets/up.svg'
import down from '../assets/down.svg'
import forward from '../assets/forward.svg'

const props = defineProps({
  title:  String,
  value:  String,
  change: String
})

const arrowIcon = computed(() => {
  const n = parseFloat(props.change)
  if (n > 0) return up
  if (n < 0) return down
  return forward
})

const formattedChange = computed(() => {
  const n    = parseFloat(props.change)
  const sign = n > 0 ? '+' : ''
  return `${sign}${n}%`
})

// split off "(...)" if present
const titleParts = computed(() => {
  const idx = props.title.indexOf('(')
  if (idx !== -1) {
    return {
      text: props.title.slice(0, idx).trim(),
      unit: props.title.slice(idx)
    }
  }
  return { text: props.title, unit: '' }
})
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&display=swap");

$border-color:  #e3e2e0;
$card-color:    #ffffff;
$title-color:   #2a2a2a;
$unit-color:    #818181;

.status-card {
  flex: 1;
  height: 116px;
  background-color: $card-color;
  border: 1px solid $border-color;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid $border-color;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.title-text {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: $title-color;
  margin-right: 4px;
}

.title-unit {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: $unit-color;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.card-value {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 100%;
  color: $title-color;
}

.change-box {
  width: 71px;
  height: 30px;
  background-color: #f5f5f5;
  border: 1px solid $border-color; 
  border-radius: 6px;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 400;
  font-size: 16px;
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