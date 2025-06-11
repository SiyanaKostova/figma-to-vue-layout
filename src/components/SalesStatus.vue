<template>
  <section class="sales-status-wrapper">
    <div class="title-row">
      <span class="title-text">Sales Status</span>
      <img :src="infoIcon" alt="Info" class="info-icon" />
    </div>

    <div class="cards-row">
      <StatusCard title="Total Sales (k€)" value="€86 897.467" change="+2" />
      <StatusCard title="# of Customers" value="0" change="0" />
      <StatusCard title="# of Product Groups" value="7" change="-5" />
      <StatusCard title="# of Products" value="23" change="+15" />
    </div>
  </section>
</template>

<script setup>
import infoIcon from '../assets/info.svg'
import StatusCard from './StatusCard.vue'
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600&display=swap");

$border-color: #e3e2e0;
$background-color: #f9f9f9;
$card-color: #ffffff;
$title-color: #2a2a2a;

.sales-status-wrapper {
  height: 200px;
  margin: 20px 95px 0 95px;
  border: 1px solid $border-color;
  border-radius: 20px;
  background-color: $background-color;
  padding: 20px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Bricolage Grotesque", sans-serif;
  color: $title-color;
}

.title-text {
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
}

.info-icon {
  width: 25px;
  height: 25px;
}

.cards-row {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
</style>