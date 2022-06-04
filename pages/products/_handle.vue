<template>
  <div class="page-container flex flex-col">
    <div
      class="product_container md:flex md:justify-center md:items-center md:gap-9"
    >
      <div class="image-container mb-12">
        <img
          class="rounded-md md:w-[36rem]"
          :src="product.images[0].src"
          alt=""
        />
      </div>
      <div class="content-contianer w-full h-full md:w-[40rem]">
        <h3 class="category text-lg lg:mb-3">Stol</h3>
        <h1 class="text-4xl mainTitle lg:text-6xl leading-[70px] lg:mb-3">{{ product.title }}</h1>
        <p class="description mb-6">
          {{ product.description }}
        </p>
        <h2 class="price mb-3 mt-16">{{ product.variants[0].price }} DKK</h2>
        <button
          class="w-full h-16 rounded-md bg-black text-white"
          @click="() => addItem(selected.id)"
        >
          <p class="ctaText">Tilføj til kurv</p>
        </button>
      </div>
    </div>
    <relatedProducts :products="products" class="w-full" />
    <featuredInspiration />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  async asyncData({ params, $shopify }) {
    const product = await $shopify.product.fetchByHandle(params.handle);
    const products = await $shopify.product.fetchAll();
    return { product, selected: product.variants[0], products };
  },

  methods: {
    ...mapActions(["addItem"]),
  },
};
</script>

<style lang="scss">
.mainTitle {
  font-family: var(--secondaryFont);

  text-transform: uppercase;
  font-weight: bold;
}
.description {
  font-size: 12px;
  font-weight: 400;
}

.price {
  font-family: var(--defaultFont);
  font-size: 18px;
  line-height: 38px;
  font-weight: 700;
}
.ctaText {
  font-family: var(--defaultFont);
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
}
</style>
