<template>
  <div
    ref="mobileNav"
    class="mobile-nav z-50 fixed top-0 right-0 bottom-0 left-0.25 transform h-full w-full translate-x-full bg-black"
  ></div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { gsap } from "gsap";

export default {
  name: "MenuOverlay",
  data: () => ({
    showHeader: true,
  }),

  methods: {
    animateMobileNavIn() {
      gsap.to(this.$refs.mobileNav, {
        visibility: "visible",
        x: 0,
        duration: 0.455,
        ease: "strong.inOut",
      });
    },
    animateMobileNavOut() {
      gsap.to(this.$refs.mobileNav, {
        x: "-100%",
        duration: 0.255,
      });
    },
    toggleMobileNavigation() {
      this.$store.dispatch("toggleMobileNavigation");
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.mobileNavVisible ? "overflow-hidden" : "",
      },
    };
  },

  watch: {
    mobileNavVisible() {
      return this[
        `animateMobileNav${this.mobileNavVisible ? "In" : "Out"}`
      ]?.();
    },
  },

  computed: {
    isBurgerActive() {
      return this.$store.state.mobileNavVisible;
    },
    mobileNavVisible() {
      return this.$store.state.mobileNavVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav {
  background: #090909;
  z-index: -1;
  width: 100%;
}
</style>
