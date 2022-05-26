<template>
  <div>
    <Hero />
    <HomeRenovate class="w-full h-full" />
    <FeaturedProducts1 :products="products" />
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
    console.log(products);
    return { products };
  },
};
</script>
