<template>
  <div
    class="featuredProducts w-full h-full page-container my-24 md:my-48 relative overflow-x-scroll"
  >
    <h1
      class="featured_header text-3xl md:text-6xl text-left md:text-center mb-3"
    >
      Se vores udvalg
    </h1>
    <div class="item-container flex justify-center gap-3 md:w-full w-max">
      <div class="item">
        <img class="w-80 h-72" src="~/assets/scss/chair.png" alt="" />
        <h2 class="mt-2 product_title">Poul Kjærholm</h2>
        <p class="mt-1 product_description">PK 9 - Stol i patineret læder</p>
        <h2 class="mt-3 price">29.999 DKK</h2>
      </div>
      <div class="item">
        <img class="w-80 h-72" src="~/assets/scss/chair.png" alt="" />
        <h2 class="mt-2 product_title">Poul Kjærholm</h2>
        <p class="mt-1 product_description">PK 9 - Stol i patineret læder</p>
        <h2 class="mt-3 price">29.999 DKK</h2>
      </div>
      <div class="item">
        <img class="w-80 h-72" src="~/assets/scss/chair.png" alt="" />
        <h2 class="mt-2 product_title">Poul Kjærholm</h2>
        <p class="mt-1 product_description">PK 9 - Stol i patineret læder</p>
        <h2 class="mt-3 price">29.999 DKK</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
