<template>
  <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item">
        <a href="#">Homepage</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Product</li>
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
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  color: var(--color-primary-500);
  padding: 0 5px;
}

.breadcrumb-item a {
  color: var(--color-gray-500);
  font-weight: $font-normal;
  text-decoration: none;
}

.breadcrumb-item.active {
  color: var(--color-primary-500);
  font-weight: $font-bold;
}
</style>