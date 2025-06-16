<template>
  <div
    class="gauge-container"
    :style="{ backgroundImage: `url(${gridBackground})` }"
  >
    <svg :width="diameter" :height="diameter / 2 + 40" ref="svgEl" />
  </div>
</template>

<script setup>
import gridBackground from '@/assets/icons/grid.svg';
import { onMounted, ref } from 'vue';
import { useSemiGauge } from './useSemiGauge';

const props = defineProps({
  value: { type: Number, default: 6 },
  diameter: { type: Number, default: 205 },
  startColor: { type: String, default: '#8AFFCE' },
  endColor: { type: String, default: '#248E70' },
  border: { type: String, default: '#01D296' },
  centerColor: { type: String, default: '#09A578' },
  redArrowColor: { type: String, default: '#B80D0D' },
  isRed: { type: Boolean, default: false },
});

const svgEl = ref(null);

onMounted(() => {
  const { draw } = useSemiGauge(svgEl, props);
  draw();
});
</script>
