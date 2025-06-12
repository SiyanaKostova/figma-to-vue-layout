<template>
  <table class="metric-table">
    <thead>
      <tr>
        <th>Combination</th>

        <template v-for="(c, idx) in columns" :key="c.key">
          <th
            v-if="c.key === 'total'"
            @click="toggleSort"
            :class="[
              { sortable: true, active: sortAsc },
              { 'no-divider': isGroupBoundary(idx) }
            ]"
          >
            {{ c.label }}
          </th>
          <th
            v-else
            :class="{ 'no-divider': isGroupBoundary(idx) }"
          >
            {{ c.label }}
          </th>
        </template>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(row, ridx) in sortedRows" :key="ridx">
        <td class="combo-cell">
          <span class="comb-first">{{ firstPart(row.combination) }}</span>
          <span class="comb-second">{{ secondPart(row.combination) }}</span>
        </td>

        <template v-for="(c, cidx) in columns" :key="c.key">
          <td
            v-if="row[c.key] !== undefined"
            :class="{ 'no-divider': isGroupBoundary(cidx) }"
          >
            <span v-if="c.percent" class="percent">
              {{ row[c.key] }} ({{ row[c.percent] }}%)
            </span>
            <span v-else>
              {{ row[c.key] }}
              <template v-if="c.key === 'total'">
                ({{ row.totalPerc }}%)
              </template>
            </span>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  rows: Array,
  columns: Array
})

const sortAsc = ref(false)
function toggleSort() {
  sortAsc.value = !sortAsc.value
}

const sortedRows = computed(() =>
  [...props.rows].sort((a, b) =>
    sortAsc.value ? a.total - b.total : b.total - a.total
  )
)

function firstPart(str) {
  return str.split(' ').slice(0, 2).join(' ')
}
function secondPart(str) {
  return str.split(' ').slice(2).join(' ')
}

const boundaryIndices = [1, 2, 4, 5]
function isGroupBoundary(colIdx) {
  return boundaryIndices.includes(colIdx)
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/typography";

.metric-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 5px;
}

.metric-table th {
  padding: 6px 8px;
  font: $font-normal $font-xs var(--font-family);
  color: var(--color-gray-400);
  border-bottom: 1px solid var(--color-gray-300);
  text-align: left;
}

.metric-table th:not(:first-child) {
  text-align: center;
}

.sortable {
  cursor: pointer;
}
.sortable::after {
  content: ' ▾';
  font-size: $font-xs;
  color: var(--color-gray-400);
}
.active::after {
  font-weight: $font-bold;
}

.metric-table th:not(:first-child),
.metric-table td:not(:first-child) {
  border-left: 1px dotted var(--color-gray-300);
}

.no-divider {
  border-left: none !important;
}

.metric-table td {
  padding: 6px 8px;
  font: $font-normal $font-sm var(--font-family);
  color: var(--color-gray-700);
  text-align: center;
}

.metric-table tbody tr + tr td {
  border-top: 1px solid var(--color-gray-300);
}

.combo-cell {
  display: flex;
  gap: 6px;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
.comb-first {
  padding-right: 6px;
  border-right: 1px dotted var(--color-gray-300);
}
.comb-second {
  padding-left: 6px;
  text-align: left;
}

.percent {
  color: var(--color-primary-800);
  font-weight: $font-bold;
  text-decoration: underline;
}
</style>