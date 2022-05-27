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
      <!-- cart  header -->
      <header class="sticky flex items-center justify-between py-2 px-7 w-full">
        <h1 class="yourorder">Din ordre</h1>
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
      <!-- Product items  -->

      <ul>
        <li
          class="item-wrapper px-8 w-full"
          v-for="item in items"
          :key="item.id"
        >
          <div class="item-container flex gap-6 w-full">
            <div class="image">
              <img :src="item.variant.image.src" class="w-36 h-36" />
            </div>
            <div class="text">
              <h1 class="item-title text-left">{{ item.title }}</h1>

              <h2 class="price mb-12">{{ item.variant.price }} DKK</h2>
              <div class="actions flex justify-between">
                <div
                  class="count rounded-full bg-gray-500 w-6 h-6 text-white flex items-center justify-center"
                >
                  1
                </div>
                <p
                  @click="() => removeItem(item.id)"
                  class="remove cursor-pointer"
                >
                  Fjern
                </p>
              </div>
            </div>
          </div>
          <hr class="mt-6 border-1 border-solid border-black w-full" />
        </li>
      </ul>
      <div v-show="cartCount === 0">
        <img src="" class="cart-empty-img" />
        <p class="text-noItems px-8 w-3/4 text-left mt-16">
          Det ligner at du ikke har tilføjet noget til kurven endnu
        </p>
        <nuxt-link to="/products">
          <p
            class="cta_cart text-lg px-8 w-3/4 text-left mt-16"
            @click="setShowCart(false)"
          >
            Se vores Produkter
          </p>
        </nuxt-link>
        <p class="brand-text absolute -rotate-90 bottom-64 -right-48">
          Klassisk Design
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["showCart", "removing", "checkout"]),
    ...mapGetters(["cartCount"]),
    items() {
      return this.checkout.lineItems;
    },
  },
  methods: {
    ...mapActions(["setShowCart", "removeItem"]),
  },
};
</script>

<style lang="scss">
.yourorder {
  font-family: var(--secondaryFont);
  font-weight: 400;
  font-size: 48px;
  line-height: 76px;
}
.item-title {
  font-family: var(--secondaryFont);
  font-size: 32px;

  font-weight: 400;
}
.text-noItems {
  font-weight: 100;
  font-family: var(--defaultFont);
}
.remove {
  font-weight: 700;
}
.price {
  font-weight: 700;
}
.hr {
}
.cta_cart {
  font-weight: 700;
  text-decoration: underline;
}
.brand-text {
  font-family: var(--secondaryFont);
  font-weight: 300;
  font-size: 64px;
  line-height: 76px;
  text-transform: uppercase;
  opacity: 0.3;
}
</style>
