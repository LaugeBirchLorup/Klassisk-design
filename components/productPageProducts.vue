<template>
  <div class="page-container">
    <div
      class="flex justify-center m-auto gap-9 md:w-[80%] flex-wrap w-[60%] mt-12 mb-12"
    >
      <div
        class="item flex flex-wrap"
        v-for="product in products.slice(0, 8)"
        :key="product.id"
      >
        <Nuxt-link :to="`products/${product.handle}`">
          <img class="w-80 h-72" :src="product.images[0].src" alt="" />
          <h2 class="mt-2 product_title">{{ product.title }}</h2>
          <p class="mt-1 product_description w-80">{{ product.description }}</p>
          <h2 class="mt-3 price">{{ product.variants[0].price }} DKK</h2>
        </Nuxt-link>
      </div>
    </div>
    <div class="flex justify-center my-12">
      <button
        class="px-8 rounded-full flex justify-center p-4 bg-black text-white"
      >
        Se flere
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  computed: {},
};
</script>

<style lang="scss" scoped>
.Title {
  font-family: var(--defaultFont);
  font-size: 30px;
  font-weight: bold;
}
.product_description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.Pris {
  font-family: var(--defaultFont);
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
}
</style>
