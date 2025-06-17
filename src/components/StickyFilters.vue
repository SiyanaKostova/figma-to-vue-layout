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

    <div class="filters-right">
      <button class="price-btn">Price Effect</button>
      <button class="minimize-btn" @click.prevent>
        <img src="../assets/icons/minimize.svg" alt="Minimize" />
        <span class="minimize-text">Minimize</span>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../assets/scss/typography";

.sticky-filters {
  position: sticky;
  bottom: 0;
  z-index: 20;
  height: auto;
  background: var(--color-white);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  gap: 8px;

  @media (min-width: 769px) {
    flex-wrap: nowrap;
    height: 60px;
    padding: 0;
  }
}

.filters-left {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-left: 0;

  @media (min-width: 769px) {
    margin-left: 97px;
    flex-wrap: nowrap;
  }
}

.filters-right {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  @media (min-width: 769px) {
    gap: 15px;
    margin-right: 10px;
  }
}

.other-filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (min-width: 769px) {
    flex-wrap: nowrap;
    gap: 10px;
  }
}

.filter-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--color-primary-700);
  border-radius: 10px;
  padding: 0 12px;
  min-width: 120px;
  height: 34px;
  background: var(--color-white);
  box-sizing: border-box;

  @media (min-width: 769px) {
    padding: 0 16px;
    min-width: 140px;
    height: 44px;
  }
}

.filter-box.date-box {
  flex-direction: row;
  align-items: center;
  min-width: 180px;

  @media (min-width: 769px) {
    min-width: 215px;
  }
}

.date-box img:first-child {
  margin-right: 8px;
}

.filter-text {
  font: $font-16-regular;
  color: var(--color-gray-700);
}

@media (max-width: 768px) {
  .filter-box.date-box .filter-text {
    font-size: 12px;
  }
}

.filter-label {
  font: 400 10px var(--font-family);
  color: var(--color-gray-400);

  @media (min-width: 769px) {
    font: 400 12px var(--font-family);
  }
}

.value-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
}

.filter-value {
  font: 400 12px var(--font-family);
  color: var(--color-gray-700);

  @media (min-width: 769px) {
    font: $font-16-regular;
  }
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
  height: 30px;
  padding: 0 10px;
  font: $font-14-regular;
  font-family: var(--font-family);
  background: var(--color-primary-700);
  border: none;
  border-radius: 8px;
  color: var(--color-white);
  white-space: nowrap;

  @media (min-width: 769px) {
    height: 44px;
    padding: 0 32px;
    font: $font-16-regular;
  }
}

.minimize-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 0 10px;
  font: $font-10-regular;
  font-family: var(--font-family);
  color: var(--color-gray-900);
  border: 1px solid #e3e2e0;
  border-radius: 8px;
  background-color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  img {
    width: 10px;
    height: 10px;
  }

  @media (min-width: 769px) {
    height: 15px;
  }
}
</style>
