<template>
  <div>
    <productHero />
    <productPageButtons class="" />
    <productPageProducts :products="products" />
  </div>
</template>

<script>
export default {
  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    console.log(products);
    return { products };
  },
};
</script>

<style lang="scss" scoped></style>
