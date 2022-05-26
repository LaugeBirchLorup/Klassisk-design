<template>
  <div>
    <Hero />
    <HomeRenovate class="w-full h-full" />
    <featuredProducts class="" :products="products" />
    <featuredInspiration />
    <Oursocials class="hidden md:block" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    return { products };
  },
};
</script>
