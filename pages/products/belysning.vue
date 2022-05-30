<template>
  <div>
    <div class="page-container w-[40%] flex flex-wrap">
      <div
        class="relative page-container rounded z-1 w-full"
        :class="{ removeImage: isBurgerActive }"
      >
        <figure class="rounded">
          <img
            class="relative rounded max-h-[48rem] h-[24rem] md:h-[24rem] w-full object-cover sm:h-[40vh]"
            src="~/assets/scss/sofaBord.png"
            alt=""
          />
        </figure>
        <h1
          class="text-4xl leading-12 md:text-5xl lg:text-7xl lg:leading-[110px] text-white absolute hero-text"
        >
          BELYSNING
        </h1>
      </div>
      <div
        class="page-container w-full h-full mt-3 flex gap-3 overflow-x-scroll hidescrollbar md:justify-center md:gap-9"
      >
        <Nuxt-link to="./stole">
          <Button class="bg-white text-black shadow-sm px-12 p-4 rounded-full"
            >Stole</Button
          >
        </Nuxt-link>
        <Nuxt-link to="./borde">
          <Button class="bg-white text-black shadow-sm px-12 p-4 rounded-full"
            >Borde</Button
          >
        </Nuxt-link>
        <Nuxt-link to="./sofaer">
          <Button class="bg-white text-black shadow-sm px-12 p-4 rounded-full"
            >Sofaer</Button
          >
        </Nuxt-link>
        <Nuxt-link to="./belysning">
          <Button class="bg-black text-white shadow-sm px-12 p-4 rounded-full"
            >Belysning</Button
          >
        </Nuxt-link>
        <Nuxt-link to="./tilbehoer">
          <Button class="bg-white text-black shadow-sm px-12 p-4 rounded-full"
            >Accessories</Button
          >
        </Nuxt-link>
      </div>
      <div
        class="flex flex-col m-auto gap-6 flex-wrap mt-12 mb-12"
        v-for="product in products"
        :key="product.id"
      >
        <div
          class="flex flex-wrap w-full"
          v-if="product.productType === 'Belysning'"
        >
          <Nuxt-link
            :to="`./${product.handle}`"
            v-if="product.productType === 'Belysning'"
          >
            <img class="w-80 h-72" :src="product.images[0].src" alt="" />
            <h2 class="mt-2 product_title">{{ product.title }}</h2>
            <p class="mt-1 product_description w-80">
              {{ product.description }}
            </p>
            <h2 class="mt-3 price">{{ product.variants[0].price }} DKK</h2>
          </Nuxt-link>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-12">
      <button
        class="px-8 rounded-full flex justify-center p-4 bg-black text-white"
      >
        Se flere
      </button>
    </div>
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

<style lang="scss" scoped>
.Title {
  font-family: var(--defaultFont);
  font-size: 30px;
  font-weight: bold;
}
.product_description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.Pris {
  font-family: var(--defaultFont);
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
}
.removeImage {
  transition: opacity 0.2s;
  opacity: 0; // set opacity property to 1, completely visible
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--secondaryFont);
  text-align: center;
  font-weight: bold;
  width: 75%;
}
.hero-button {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
}
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

.hidescrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hidescrollbar::-webkit-scrollbar {
  display: none;
}
</style>
