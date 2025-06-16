<template>
  <section class="sales-status-wrapper">
    <div class="title-row">
      <span class="title-text">Sales Status</span>
      <img
        :src="infoIcon"
        alt="Info"
        class="info-icon"
        data-bs-toggle="popover"
        data-bs-trigger="hover focus"
        data-bs-placement="top"
        data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ref="popoverIcon"
      />
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
import { onMounted, ref } from "vue";
import infoIcon from "../../assets/icons/info.svg";
import StatusCard from "./StatusCard.vue";
import { Popover } from "bootstrap";

const popoverIcon = ref(null);

onMounted(() => {
  new Popover(popoverIcon.value);
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/typography";

.sales-status-wrapper {
  height: 200px;
  margin: 20px 95px 0 95px;
  border: 1px solid var(--color-gray-300);
  border-radius: 20px;
  background-color: var(--color-gray-25);
  padding: 20px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-family);
  color: var(--color-gray-700);
}

.title-text {
  font: $font-20-bold;
  line-height: 100%;
}

.info-icon {
  cursor: pointer;
}

.cards-row {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
</style>
