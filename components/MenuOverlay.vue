<template>
  <div
    ref="mobileNav"
    class="mobile-nav z-20 fixed top-0 right-0 bottom-0 left-0.25 transform h-full w-full translate-x-full bg-black"
  >
    <div class="container page-container w-full h-full grid grid-cols-12 gap-8">
      <div class="content_text col-start-2 col-span-4 m-auto">
        <div class="bigger_menu__items text-5xl">
          <ol>
            <nuxt-link to="/product">
              <li @click="toggleMobileNavigation()">Shop</li>
            </nuxt-link>
            <nuxt-link to="/istandsaettelse">
              <li @click="toggleMobileNavigation()">Istandsættelse</li>
            </nuxt-link>
            <nuxt-link to="/kontakt">
              <li @click="toggleMobileNavigation()">Kontakt</li>
            </nuxt-link>
          </ol>
        </div>
        <div class="social-icons flex gap-3 mt-12">
          <a href="www.instagram.com/klassisk-design">
            <img
              @click="toggleMobileNavigation()"
              src="~/assets/scss/instagram-white-logo.png"
              alt=""
            />
          </a>
          <a href="www.facebook.com/klassisk-design">
            <img
              @click="toggleMobileNavigation()"
              src="~/assets/scss/facebook-white-logo.png"
              alt=""
            />
          </a>
        </div>
        <div class="smaller_menu__items mt-12">
          <ol>
            <li class="mb-3">Din Kurv</li>
            <li class="mb-3">Kontakt Os</li>
            <li class="mb-3">Legal</li>
          </ol>
        </div>
      </div>
      <figure
        class="content_image items-center col-span-7 hidden md:flex mt-[7vh]"
      >
        <img
          class="max-h-[85vh]"
          src="~/assets/scss/MenuOverlayImage.png"
          alt=""
        />
      </figure>
    </div>
  </div>
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
    toggleMobileNavigation() {
      this.$store.dispatch("toggleMobileNavigation");
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
  width: 100%;
}

.content_text {
  text-decoration: none;
}
</style>
