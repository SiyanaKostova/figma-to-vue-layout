<template>
  <section class="flash-news-wrapper">
    <h2 class="flash-title">
      Flash news about <span class="product-name">:Product:</span>
    </h2>

    <div class="tiles-row" ref="tilesRef">
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
    </div>

    <button class="next-btn" @click.prevent="scrollNext">
      <img src="../assets/icons/chevron_gr.svg" alt="Next" />
    </button>

    <div class="mask-overlay" />
  </section>
</template>

<script setup>
import { ref } from 'vue';

const tilesRef = ref(null);

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

function scrollNext() {
  if (tilesRef.value) {
    tilesRef.value.scrollBy({ left: 220, behavior: 'smooth' });
  }
}
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
  position: relative;
  overflow: hidden;
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
  display: flex;
  gap: 12px;
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
  height: 100%;
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
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  height: 30px;
  width: 30px;
  background: var(--color-white);
  border: 1px solid #00d498;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;

  img {
    width: 20px;
    height: 15px;
  }
}

.mask-overlay {
  position: absolute;
  top: 0;
  right: 20px;
  width: 80px;
  height: 100%;
  background: linear-gradient(to right, #ccf4ea00, #ccf4ea);
  border-radius: 15px;
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 768px) {
  .flash-news-wrapper {
    height: auto;
    margin: 20px 16px 0 16px;
    padding: 16px;
  }

  .tiles-row {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    height: auto;
    padding-right: 0;
    -webkit-overflow-scrolling: touch;
  }

  .news-tile {
    flex: 0 0 auto;
    width: 70%;
    min-width: 200px;
    scroll-snap-align: start;
  }

  .next-btn {
    top: auto;
    bottom: 12px;
    right: 8px;
    transform: none;
    z-index: 3;
  }

  .mask-overlay {
    display: none;
  }
}
</style>
