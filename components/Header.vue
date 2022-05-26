<template>
  <div
    class="h-24 page-container flex items-center w-full z-20"
    :class="{ activeText: isBurgerActive }"
  >
    <MenuOverlay class="w-full h-screen" />
    <div class="flex items-center justify-start gap-3">
      <div
        class="h-navbox items-center cursor-pointer"
        id="burger"
        :class="{ active: isBurgerActive }"
        @click="toggleMobileNavigation()"
      >
        <slot>
          <button
            :class="{ active: isBurgerActive }"
            type="button"
            class="burger-button"
            title="Menu"
          >
            <span
              class="burger-bar burger-bar--1 translate-y"
              :class="{ activeText: isBurgerActive }"
            ></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
          </button>
        </slot>
      </div>
      <p class="menu_text hidden md:block">Menu</p>
    </div>
    <div class="logo justify-center w-full hidden md:flex">
      <nuxt-link to="/">
        <h1 class="test">KLASSISK DESIGN</h1>
      </nuxt-link>
    </div>
    <div class="logo justify-center w-full flex md:hidden">
      <nuxt-link to="/">
        <h1 class="test">KD</h1>
      </nuxt-link>
    </div>
    <div
      class="kurv flex gap-3 items-center justify-end cursor-pointer"
      @click="setShowCart(!showCart)"
    >
      <p class="hidden md:block">Kurv</p>
      <div
        :class="{ activeMenu: isBurgerActive }"
        class="borderCircle rounded-full h-8 w-8 border-solid border-2 flex justify-center items-center"
      >
        <p>0</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  components: {
    MenuOverlay: () => import("@/components/MenuOverlay"),
  },
  computed: {
    isBurgerActive() {
      return this.$store.state.mobileNavVisible;
    },
    mobileNav() {
      return this.$store.state.mobileNavVisible;
    },
    ...mapState(["showCart"]),
    ...mapGetters(["cartCount"]),
  },

  methods: {
    activate(link) {
      this.active = link;
    },
    toggleMobileNavigation() {
      this.$store.dispatch("toggleMobileNavigation");
    },
    ...mapActions(["setShowCart"]),
  },
};
</script>

<style lang="scss" scoped>
.test {
  font-family: var(--secondaryFont);
  font-size: 32px;
  font-weight: bold;
}

button:focus {
  outline: 0;
}
.borderCircle {
  border-color: black;
}
.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 30;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #090909;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.activeText {
  color: #f1f1f1;
  border-color: #f1f1f1 !important;
}

.activeMenu {
  border-color: #f1f1f1;
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #f1f1f1;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}

.logo {
  z-index: 30;
}

.kurv {
  z-index: 30;
}

.menu_text {
  z-index: 30;
}
</style>
