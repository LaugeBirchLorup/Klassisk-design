<template>
  <div class="container page-container">
    <div class="image-container">
      <img class="rounded-md" :src="product.images[0].src" alt="" />
    </div>
    <div class="content-contianer">
      <h3 class="category">Stol</h3>
      <h1 class="main-title">{{ product.title }}</h1>
      <p class="description">{{ product.description }}</p>
      <h2>{{ product.variants[0].price }}</h2>
    </div>
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
