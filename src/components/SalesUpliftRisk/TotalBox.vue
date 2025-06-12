<template>
  <div class="total-box">
    <div class="tb-header">
      <div class="tb-title-group">
        <span class="tb-label">Total</span>
        <span class="tb-value">€{{ formatNumber(total) }}</span>
      </div>
      <div class="tb-change-box">
        <span class="tb-change-text">
          {{ percent > 0 ? "+" : "" }}{{ percent }}%
        </span>
        <img :src="arrowIcon(percent)" alt="arrow" />
      </div>
    </div>

    <div class="tb-separator"></div>

    <div class="tb-rows">
      <div v-for="(row, i) in rows" :key="i" class="tb-row">
        <div class="row-content">
          <span class="row-label">{{ row.label }}:</span>
          <span class="row-amount">€{{ formatNumber(row.value) }}</span>

          <div v-if="row.percent === 4" class="special-change-box positive">
            +4%
          </div>
          <div
            v-else-if="row.percent === -4"
            class="special-change-box negative"
          >
            -4%
          </div>

          <span v-else class="row-percent" :class="percentClass(row.percent)">
            {{ row.percent > 0 ? "+" : "" }}{{ row.percent }}%
          </span>
          <img
            v-if="row.percent !== 4 && row.percent !== -4"
            :src="arrowIcon(row.percent)"
            alt="trend"
            class="percent-arrow"
          />
        </div>

        <img :src="greenArrow" alt="go" class="row-next" />
      </div>
    </div>
  </div>
</template>

<script setup>
import upArrow from "../../assets/icons/up.svg";
import downArrow from "../../assets/icons/down.svg";
import forwardArrow from "../../assets/icons/forward.svg";
import greenArrow from "../../assets/icons/green_ar.svg";

const props = defineProps({
  total: Number,
  percent: Number,
  rows: Array,
});

const formatNumber = (n) =>
  n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const percentClass = (p) => (p > 0 ? "positive" : p < 0 ? "negative" : "");

const arrowIcon = (p) => (p > 0 ? upArrow : p < 0 ? downArrow : forwardArrow);
</script>

<style scoped lang="scss">
@import "../../assets/scss/typography";

.total-box {
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  background: var(--color-white);
  height: 168px;

  .tb-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .tb-title-group {
      display: flex;
      flex-direction: column;

      .tb-label {
        font: $font-14-regular;
      }
      .tb-value {
        font: $font-20-bold;
      }
    }

    .tb-change-box {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      padding: 0 8px;
      gap: 4px;
      border: 1px solid var(--color-gray-300);
      border-radius: 6px;
      background-color: var(--color-gray-25);

      .tb-change-text {
        font: $font-16-regular;
        color: var(--color-gray-700);
        line-height: 100%;
      }

      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  .tb-separator {
    height: 1px;
    background-color: var(--color-gray-300);
    margin: 0 0 7px;
  }

  .tb-rows {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .tb-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid var(--color-primary-700);
      background: var(--color-white);
      height: 40px;
      padding: 0 12px;
      border-radius: 8px;
      margin-bottom: 4px;

      .row-content {
        display: flex;
        align-items: center;
        gap: 8px;

        .row-label {
          font: $font-14-regular;
        }
        .row-amount {
          font: $font-16-bold;
        }

        .row-percent {
          font: $font-16-regular;

          &.positive {
            color: var(--color-primary-600);
          }
          &.negative {
            color: var(--color-danger-500);
          }
        }

        .percent-arrow {
          width: 12px;
          height: 12px;
        }

        .special-change-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 20px;
          padding: 0 8px;
          border: 1px solid var( --color-gray-300);
          background-color: var(--color-gray-25);
          border-radius: 6px;
          font: $font-16-regular;

          &.positive {
            color: var(--color-primary-600);
          }
          &.negative {
            color: var(--color-danger-300);
          }
        }
      }

      .row-next {
        height: 25px;
        width: auto;
      }
    }
  }
}
</style>
