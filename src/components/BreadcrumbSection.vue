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
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700&display=swap");

.breadcrumb-wrapper {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 14px;
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
  color: #00c898;
  padding: 0 5px;
}

.breadcrumb-item a {
  color: #595D61;
  text-decoration: none;
  font-weight: 400;
}

.breadcrumb-item.active {
  color: #00c898;
  font-weight: 700;
}
</style>