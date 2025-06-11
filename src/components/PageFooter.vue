<template>
  <footer class="footer-bar">
    <div class="footer-content">
      <div class="footer-left">
        <span class="footer-help">Need Help?</span>
        <span class="footer-contact">Contact Us</span>
      </div>

      <div class="footer-center">
        <img src="../assets/icons/logo_supply.svg" alt="SupplyIQ logo" />
      </div>

      <div class="footer-right">
        @SalesIQ 2025
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../assets/scss/typography";

.footer-bar {
  background-color: var(--color-primary-500);
  height: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  position: relative;
  width: 100%;  
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white );
  font: $font-16-regular;
}

.footer-left,
.footer-right {
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.footer-right {
  border-right: none;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding-left: 16px;
  padding-right: 0;
}

.footer-help {
  font: $font-16-regular;
}

.footer-contact {
  font: $font-16-bold;
  text-decoration: underline;
}

.footer-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.footer-center img {
  height: 20.2px;
}
</style>
