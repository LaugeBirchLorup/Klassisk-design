<template>
  <div class="w-full h-full page-container my-32 md:my-48 overflow-x-scroll">
    <h1
      class="featured_header text-3xl md:text-6xl text-left md:text-center mb-3"
    >
      Se vores udvalg
    </h1>
    <div class="item-container flex justify-center gap-3 w-[180%] md:w-full">
      <div class="item">
        <img class="" src="~/assets/scss/chair.png" alt="" />
        <h2 class="mt-2 product_title">Poul Kjærholm</h2>
        <p class="mt-1 product_description">PK 9 - Stol i patineret læder</p>
        <h2 class="mt-3 price">29.999 DKK</h2>
      </div>
      <div class="item">
        <img class="" src="~/assets/scss/chair.png" alt="" />
        <h2 class="mt-2 product_title">Poul Kjærholm</h2>
        <p class="mt-1 product_description">PK 9 - Stol i patineret læder</p>
        <h2 class="mt-3 price">29.999 DKK</h2>
      </div>
      <div class="item">
        <img class="" src="~/assets/scss/chair.png" alt="" />
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
</style>
