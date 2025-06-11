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
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700&display=swap");
$font: 'Bricolage Grotesque', sans-serif;
$mint-bg: #ccf4ea;
$mint-border: #00d498;
$date-color: #595d61;

.flash-news-wrapper,
.flash-title,
.product-name,
.date {
  font-family: $font;
}

.flash-news-wrapper {
  height: 142px;
  border-radius: 15px;
  background: $mint-bg;
  padding: 16px 20px;
  margin: 20px 95px 0 95px;
}

.flash-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #2a2a2a;
  padding-top: 2px;
  padding-bottom: 13px;
}

.product-name {
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #2a2a2a;
}

.tiles-row {
  height: 76px;
  position: relative;
}

.news-tile {
  flex: 1 1 0;
  background: #fff;
  border: 1px solid $mint-border;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 14px;
}

.date {
  font-size: 12px;
  font-weight: 400;
  color: $date-color;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: $mint-border;
  border: 1px solid $mint-border;
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
  background: #fff;
  border: 1px solid $mint-border;
  border-left: none;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $mint-border;
}

</style>