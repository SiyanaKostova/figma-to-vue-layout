<template>
  <section class="wrapper">
    <div class="row">
      <!-- ── Sales Uplift ── -->
      <article class="card">
        <div class="top-row">
          <div class="left-col">
            <div class="title">
  <h3 class="title-text">Sales Uplift</h3>
              <img
                :src="infoIcon"
                alt="Info"
                class="info-icon"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-placement="top"
                data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                ref="upliftPopover"
              />
            </div>
            <span class="sub">(All values in k€)</span>
            <SemiGauge
              class="gauge up"
              :value="6"
              :centerColor="'#09A578'"
              :startColor="'#8AFFCE'"
              :endColor="'#248E70'"
              :border="'#01D296'"
            />
          </div>
          <TotalBox
            class="total-box"
            :total="678789"
            :percent="1"
            :rows="[
              { label: 'Price', value: 478789, percent: 4 },
              { label: 'Volume', value: 200000, percent: 4 },
            ]"
          />
        </div>

        <div class="table-wrap">
          <MetricTable :rows="upliftRows" :columns="upliftCols" />
        </div>
      </article>

      <!-- ── Risk ── -->
      <article class="card">
        <div class="top-row">
          <div class="left-col">
            <div class="title">
  <h3 class="title-text">Risk</h3>
              <img
                :src="infoIcon"
                alt="Info"
                class="info-icon"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-placement="top"
                data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                ref="riskPopover"
              />
            </div>
            <span class="sub invisible">(All values in k€)</span>
            <SemiGauge
              class="gauge risk"
              :value="6"
              :centerColor="'#B80D0D'"
              :startColor="'#FFCFCF'"
              :endColor="'#FFA1A1'"
              :border="'#B80D0D'"
              :isRed="true"
            />
          </div>
          <TotalBox
            class="total-box"
            :total="678789"
            :percent="1"
            :rows="[
              { label: 'Disruption', value: 478789, percent: -4 },
              { label: 'Erosion', value: 200000, percent: -4 },
            ]"
          />
        </div>

        <div class="table-wrap">
          <MetricTable :rows="riskRows" :columns="riskCols" />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import SemiGauge from "./SemiGauge/SemiGauge.vue";
import MetricTable from "./MetricTable.vue";
import infoIcon from "../../assets/icons/info.svg";
import TotalBox from "./TotalBox.vue";

import { onMounted, ref } from "vue";
import { Popover } from "bootstrap";

import upliftRows from "../../data/upliftTable.json";
import riskRows from "../../data/riskTable.json";

const upliftCols = [
  { key: "pricePlay", label: "Price play", percent: "pricePerc" },
  { key: "volumePlay", label: "Volume Play", percent: "volumePerc" },
  { key: "total", label: "Total" },
];
const riskCols = [
  { key: "distribution", label: "Distribution", percent: "distPerc" },
  { key: "erosion", label: "Erosion", percent: "erosPerc" },
  { key: "total", label: "Total" },
];

const upliftPopover = ref(null);
const riskPopover = ref(null);

onMounted(() => {
  if (upliftPopover.value) new Popover(upliftPopover.value);
  if (riskPopover.value) new Popover(riskPopover.value);
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/typography";

.wrapper {
  margin: 20px 108px 0 108px;
}

.row {
  display: flex;
  gap: 16px;
}

.card {
  flex: 1;
  background: var(--color-gray-25);
  border: 1px solid var(--color-gray-300);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 441px;
}

.top-row {
  display: flex;
  gap: 38px;
  padding: 20px 18px 0 18px;
}

.left-col {
  flex: 0 0 205px;
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
  font: $font-20-bold;
  color: var(--color-gray-700);
  line-height: 100%;
}

.title-text {
  font: $font-20-bold;
  margin: 0;
  line-height: 1;
  display: flex;
  align-items: center;
}

.title img {
  width: 25px;
  height: 25px;
}

.sub {
  font: $font-normal $font-xs var(--font-family);
  color: var(--color-gray-400);
}

.gauge.up {
  margin-top: 20px;
}

.gauge.risk {
  margin-top: 20px;
}

.total-box {
  flex: 1;
  height: 168px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  background: var(--color-white);
}

.table-wrap {
  margin-top: 20px;
  padding: 0 18px;
  height: 185px;
}
.table-wrap .metric-table {
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-gray-300);
  border-radius: 12px;
  background: var(--color-white);
  overflow: auto;
}

.invisible {
  visibility: hidden;
}

.info-icon {
  cursor: pointer;
}
</style>
