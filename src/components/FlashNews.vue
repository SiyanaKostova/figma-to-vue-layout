<template>
  <section class="flash-news-wrapper">
    <!-- title row -->
    <h6 class="flash-title">
      Flash news about <span class="product-name">:Product:</span>
    </h6>

    <!-- news tiles -->
    <div class="tiles-row d-flex gap-3">
      <article
        v-for="item in news"
        :key="item.id"
        class="news-tile d-flex flex-column justify-content-between"
      >
        <span class="date">
          <span class="dot"></span>
          {{ item.date }}
        </span>
        <p class="text">{{ item.text }}</p>
      </article>

      <!-- arrow button on the right -->
      <button class="next-btn">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </section>
</template>

<script setup>
const news = [
  {
    id: 1,
    date: "30.07.2024",
    text: "Supplier top news will be shown here in the form of a live ticker",
  },
  {
    id: 2,
    date: "30.07.2024",
    text: "Supplier top news will be shown here in the form of a live ticker",
  },
  {
    id: 3,
    date: "30.07.2024",
    text: "Supplier top news will be shown here in the form of a live ticker",
  },
];
</script>

<style scoped lang="scss">
@import "../assets/scss/typography";

.flash-news-wrapper,
.flash-title,
.product-name,
.date {
  font-family: var(--font-family);
}

.flash-news-wrapper {
  height: 142px;
  border-radius: 15px;
  background: var(--color-primary-100);
  padding: 16px 20px;
  margin: 20px 95px 0 95px;
}

.flash-title {
  font: $font-16-bold;
  line-height: 100%;
  color: var(--color-gray-700);
  padding-top: 2px;
  padding-bottom: 13px;
}

.product-name {
  font: $font-16-regular;
  line-height: 100%;
  color: var(--color-gray-700);
}

.tiles-row {
  height: 76px;
  position: relative;
}

.news-tile {
  flex: 1 1 0;
  background: var(--color-white);
  border: 1px solid var(--color-primary-700);
  border-radius: 5px;
  padding: 8px 12px;
  font-size: $font-sm;
}

.date {
  font-size: $font-xs;
  font-weight: $font-normal;
  color: var(--color-gray-500);
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: var(--color-primary-700);
  border: 1px solid var(--color-primary-700);
  border-radius: 50%;
  margin-right: 3px;
  position: relative;
}

.next-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-primary-700);
  border-left: none;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-700);
}
</style>
