<template>
  <header class="app-header">
    <div class="header-content">
      <div
        class="header-inner d-flex justify-content-between align-items-center"
      >
        <div class="left-side d-flex align-items-center gap-2">
          <a href="/">
            <img :src="logoIcon" alt="SupplyIQ Logo" class="logo-img" />
          </a>
          <img :src="logoText" alt="SupplyIQ Text" class="text-img" />
        </div>

        <div class="right-side d-flex align-items-center gap-4">
          <!-- Mobile nav toggle -->
          <button
            class="nav-toggle d-md-none"
            @click="isNavOpen = !isNavOpen"
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <!-- Desktop navigation -->
          <div class="nav-links d-none d-md-flex align-items-center gap-4">
            <span class="nav-link nav-regular">Company</span>
            <span ref="activeLink" class="nav-link nav-bold active"
              >Product</span
            >
            <span class="nav-link nav-medium">Customer</span>
          </div>

          <div class="profile-box">
            <img :src="profileIcon" alt="Profile" class="profile-img" />
          </div>
        </div>
      </div>

      <!-- Mobile navigation menu -->
      <div v-if="isNavOpen" class="mobile-nav d-md-none">
        <nav class="mobile-nav-links">
          <span class="nav-link nav-regular">Company</span>
          <span class="nav-link nav-bold active">Product</span>
          <span class="nav-link nav-medium">Customer</span>
        </nav>
      </div>
    </div>

    <!-- Responsive underline -->
    <div class="underline-indicator" :style="{ left: underlineLeft + 'px' }" />
  </header>
</template>

<script>
import logoIcon from "../assets/icons/logo_header.svg";
import logoText from "../assets/icons/supplyiq_header.svg";
import profileIcon from "../assets/icons/profile.svg";

export default {
  name: "AppHeader",
  data() {
    return {
      logoIcon,
      logoText,
      profileIcon,
      isNavOpen: false,
      underlineLeft: 0, 
    };
  },
  mounted() {
    this.updateUnderline();
    window.addEventListener("resize", this.updateUnderline);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateUnderline);
  },
  methods: {
    updateUnderline() {
      this.$nextTick(() => {
        const el = this.$refs.activeLink;
        if (el) {
          const rect = el.getBoundingClientRect();
          const parentRect = this.$el.getBoundingClientRect();
          this.underlineLeft = rect.left + rect.width / 2 - parentRect.left;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/typography";

.app-header {
  font-family: var(--font-family);
  height: auto;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-200);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  padding: 20px;
  box-sizing: border-box;
}

.header-content {
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 30px;
  width: 30px;
  margin-bottom: 10px;
  display: block;
}

.text-img {
  height: 40px;
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

.nav-link.active {
  color: var(--color-primary-500);
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

.nav-toggle {
  font-size: 24px;
  background: none;
  border: none;
  color: var(--color-gray-700);
  cursor: pointer;
}

.mobile-nav {
  margin-top: 12px;
  width: 100%;
  background-color: var(--color-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 12px 16px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

/* Responsive underline bar */
.underline-indicator {
  position: absolute;
  bottom: -1px;
  height: 4px;
  width: 76px;
  background-color: var(--color-primary-500);
  transform: translateX(-50%);
  transition: left 0.3s ease;
  z-index: 2;
}

@media (max-width: 768px) {
  .logo-img {
    height: 24px;
    width: 24px;
    margin-bottom: 6px;
  }

  .text-img {
    height: 28px;
  }

  .profile-img {
    height: 36px;
  }

  .nav-link {
    font-size: 15px;
  }

  .underline-indicator {
    display: none;
  }
}
</style>
