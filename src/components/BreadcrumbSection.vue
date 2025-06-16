<template>
  <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item">
        <a href="#">Homepage</a>
      </li>
      <li class="breadcrumb-separator">
        <img src="../assets/icons/breadcrumb_arrow.svg" alt="arrow" />
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <h1 class="breadcrumb-title">Product</h1>
      </li>
    </ol>
  </nav>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import "../assets/scss/typography";

.breadcrumb-wrapper {
  font-family: var(--font-family);
  font-size: $font-sm;
  line-height: 100%;
  margin: 0 0 0 97px;
  height: 17px;
}

.breadcrumb {
  background: transparent;
  padding: 5px;
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
}

.breadcrumb-item {
  color: var(--color-gray-500);
  font-weight: $font-normal;

  &.active {
    color: var(--color-primary-500);
    font-weight: $font-bold;
  }

  a {
    text-decoration: none;
    color: var(--color-gray-500);
  }
}

.breadcrumb-separator {
  display: flex;
  align-items: center;
  padding: 0 10px;

  img {
    height: 12px;
    width: auto;
  }
}

.breadcrumb-title {
  font: inherit;
  margin: 0;
  display: inline;
  font-weight: $font-bold;
  color: var(--color-primary-500);
}
</style>