<template>
  <div
    class="featuredProducts w-full h-full page-container my-24 md:my-48 relative overflow-x-scroll md:overflow-x-visible"
  >
    <h1
      class="featured_header text-3xl md:text-6xl text-left md:text-center mb-3"
    >
      Se vores udvalg
    </h1>
    <div class="item-container flex justify-center gap-3 md:w-full w-max">
      <div
        class="item"
        v-for="product in products.slice(0, 3)"
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
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style lang="scss" scoped>
.featured_header {
  font-family: var(--secondaryFont);
  font-weight: bold;
}

.product_title {
  font-family: var(--defaultFont);
  font-weight: bold;
}

.product_description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.price {
  font-family: var(--defaultFont);
  font-weight: bold;
}

.featuredProducts {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.featuredProducts::-webkit-scrollbar {
  display: none;
}
</style>
