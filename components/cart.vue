<template>
  <div class="w-full h-screen fixed z-50 pointer-events-none">
    <!-- Overlay -->
    <transition name="fade">
      <div
        v-show="showCart"
        class="w-full h-full bg-black bg-opacity-75 pointer-events-auto hidden md:block"
        @click="setShowCart(false)"
      ></div>
    </transition>
    <div
      v-show="showCart"
      class="w-[100%] h-screen md:w-8/12 lg:w-6/12 xl:w-5/12 xl:max-w-xl max-h-screen md:h-screen bg-white px-4 transform transition-transform absolute md:right-0 bottom-0 overflow-y-auto transform-translate-y md:transform-translate-x pointer-events-auto"
    >
      <header class="sticky flex items-center justify-between p-8 w-full">
        <h1 class="">Din Kurv</h1>
        <div class="closeBurger cursor-pointer" @click="setShowCart(false)">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L16 16" stroke="black" stroke-linecap="round" />
            <path d="M16 1L1 16" stroke="black" stroke-linecap="round" />
          </svg>
        </div>
      </header>
      <div class="item-wrapper px-8 w-full">
        <div class="item-container flex gap-6">
          <div class="image">
            <img class="w-36 h-36" src="~/assets/scss/chair.png" />
          </div>
          <div class="text">
            <h1 class="item-title text-left">HANS J BERG</h1>

            <h2 class="price mb-12">232323 DKK</h2>
            <div class="actions flex justify-between">
              <div
                class="count rounded-full bg-gray-500 w-6 h-6 text-white flex items-center justify-center"
              >
                1
              </div>
              <p class="remove">Fjern</p>
            </div>
          </div>
        </div>
        <hr class="mt-6 border-1 border-solid border-black w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      preventUpdate: false,
    };
  },
  computed: {
    ...mapState(["showCart"]),
    ...mapGetters(["cartCount"]),
    items() {
      return this.checkout.lineItems;
    },
  },
  methods: {
    ...mapActions(["setShowCart"]),
  },
};
</script>

<style lang="scss">
.item-title {
  font-family: var(--secondaryFont);
  font-size: 32px;

  font-weight: 400;
}
.remove {
  font-weight: 700;
}
.price {
  font-weight: 700;
}
.hr {
}
</style>
