<template>
  <div class="sticky-filters">
    <div class="filters-left">
      <div class="filter-box date-box">
        <img src="../assets/icons/calendar.svg" alt="Calendar" />
        <span class="filter-text">20/11/23 to 20/12/23</span>
        <img
          src="../assets/icons/chevron-down.svg"
          alt="▼"
          class="dropdown-icon"
        />
      </div>

      <div class="other-filters">
        <div class="filter-box">
          <span class="filter-label">Product Cluster</span>
          <div class="value-row">
            <span class="filter-value">Products231</span>
            <img
              src="../assets/icons/chevron-down.svg"
              alt="▼"
              class="dropdown-icon"
            />
          </div>
        </div>
        <div class="filter-box">
          <span class="filter-label">Product Group</span>
          <div class="value-row">
            <span class="filter-value">Group 5123</span>
            <img
              src="../assets/icons/chevron-down.svg"
              alt="▼"
              class="dropdown-icon"
            />
          </div>
        </div>
        <div class="filter-box">
          <span class="filter-label">Product</span>
          <div class="value-row">
            <span class="filter-value">Gillete</span>
            <img
              src="../assets/icons/chevron-down.svg"
              alt="▼"
              class="dropdown-icon"
            />
          </div>
        </div>
      </div>
    </div>

    <button class="price-btn">Price Effect</button>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../assets/scss/typography";

.sticky-filters {
  position: sticky;
  bottom: 0;
  z-index: 20;
  height: 60px;
  background: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 97px 0;
}

.filters-left {
  display: flex;
  gap: 5px;
}

.other-filters {
  display: flex;
  gap: 10px;
}

.filter-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  border: 1px solid var(--color-primary-700);
  border-radius: 10px;
  padding: 0 16px; 
  min-width: 140px;
  height: 44px;
  background: var(--color-white);
}

.filter-box.date-box {
  flex-direction: row;
  align-items: center;
  min-width: 215px;
}

.date-box img:first-child {
  margin-right: 8px;
}

.filter-text {
  font: $font-16-regular;
  color: var(--color-gray-700);
}

.filter-label {
  font: 400 12px var(--font-family);
  color: var(--color-gray-400);
}

.value-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
}

.filter-value {
  font: $font-16-regular;
  color: var(--color-gray-700);
}

.dropdown-icon {
  position: absolute;
  right: 6px; 
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
}

.price-btn {
  height: 44px;
  background: var(--color-primary-700);
  border: none;
  border-radius: 9px;
  padding: 0 32px;
  font: $font-16-regular;
  color: var(--color-white);
  cursor: pointer;
}
</style>
