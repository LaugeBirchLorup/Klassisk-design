<template>
  <div class="text-center">
    {{ product.title }}
  </div>
</template>

<script>
export default {
  async asyncData({ params, $shopify }) {
    const product = await $shopify.product.fetchByHandle(params.handle);
    return { product, selected: product.variants[0] };
  },
};
</script>

<style lang="scss" scoped></style>
