<template>
  <div
    class="featuredInspiration w-full h-full page-container my-24 md:my-32 overflow-x-scroll md:overflow-x-visible"
  >
    <h1
      class="featured_header text-3xl md:text-6xl text-left md:text-center mb-3"
    >
      Mangler du inspiration?
    </h1>
    <div class="item-container flex justify-center gap-3 md:w-full w-max">
      <a href="https://www.instagram.com/p/CeJkljQNh41/">
        <div class="item">
          <img class="w-80 h-80" src="~/assets/scss/instagram1.png" alt="" />
        </div>
      </a>
      <a href="https://www.instagram.com/p/CeDwEMwMcTa/">
        <div class="item">
          <img class="w-80 h-80" src="~/assets/scss/instagram2.png" alt="" />
        </div>
      </a>
      <a href="https://www.instagram.com/p/Cds48IdqJgs/">
        <div class="item">
          <img class="w-80 h-80" src="~/assets/scss/instagram3.png" alt="" />
        </div>
      </a>
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
.featuredInspiration {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.featuredInspiration::-webkit-scrollbar {
  display: none;
}
</style>
