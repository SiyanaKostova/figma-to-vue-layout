<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-inner d-flex justify-content-between align-items-center">
        <div class="left-side">
          <img :src="logo" alt="SupplyIQ Logo" class="logo-img" />
        </div>

        <div class="right-side d-flex align-items-center gap-4">
          <div class="nav-links d-flex align-items-center gap-4">
            <span class="nav-link font-400">Company</span>
            <span class="nav-link font-700 active">Product</span>
            <span class="nav-link font-500">Customer</span>
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
import logo from "../assets/supply.svg";
import profileIcon from "../assets/profile.svg";

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
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700&display=swap');

.app-header {
  font-family: 'Bricolage Grotesque', sans-serif;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
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
  color: #444;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #00c898;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -32px; 
  right: -9px;
  width: 76px;
  height: 4px;
  background-color: #00c898;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav-link.active {
  color: #00c898;
}

.nav-link.active::after {
  transform: scaleX(1);
}

.font-400 {
  font-weight: 400;
}

.font-500 {
  font-weight: 500;
}

.font-700 {
  font-weight: 700;
}

.profile-img {
  height: 42px;
  width: auto;
  display: block;
}
</style>
