<template>
  <div>
    <renoHero />
    <istand-sbs-1 />
    <istand-sbs-2 />
    <featuredProducts class="" :products="products" />
    <featuredInspiration />
  </div>
</template>

<script>
export default {
  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    return { products };
  },
};
</script>

<style lang="scss" scoped></style>
