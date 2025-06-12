<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-inner d-flex justify-content-between align-items-center">
        <div class="left-side">
          <img :src="logo" alt="SupplyIQ Logo" class="logo-img" />
        </div>

        <div class="right-side d-flex align-items-center gap-4">
          <div class="nav-links d-flex align-items-center gap-4">
            <span class="nav-link nav-regular">Company</span>
            <span class="nav-link nav-bold active">Product</span>
            <span class="nav-link nav-medium">Customer</span>
          </div>
          <div class="profile-box">
            <img :src="profileIcon" alt="Profile" class="profile-img" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import logo from "../assets/icons/supply.svg";
import profileIcon from "../assets/icons/profile.svg";

export default {
  name: "AppHeader",
  data() {
    return {
      logo,
      profileIcon,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/typography";

.app-header {
  font-family: var(--font-family);
  height: 80px;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-200);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 20px;
}

.header-content {
  height: 40px;
  position: relative;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
}

.logo-img {
  height: 40px;
  width: auto;
  display: block;
}

.nav-link {
  position: relative;
  cursor: pointer;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  color: var(--color-gray-600);
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--color-primary-500);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -32px;
  right: -9px;
  width: 76px;
  height: 4px;
  background-color: var(--color-primary-500);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav-link.active {
  color: var(--color-primary-500);
}

.nav-link.active::after {
  transform: scaleX(1);
}

.nav-regular {
  font: $font-16-regular;
}
.nav-medium {
  font-weight: 500;
  font-family: var(--font-family);
}
.nav-bold {
  font: $font-16-bold;
}

.profile-img {
  height: 42px;
  width: auto;
  display: block;
}
</style>
