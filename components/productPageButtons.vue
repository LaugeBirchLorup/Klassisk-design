<template class="overflow-x-hidden mb-3">
  <div
    class="page-container w-full h-full mt-3 flex gap-3 overflow-x-scroll hidescrollbar md:justify-center md:gap-9"
  >
    <Nuxt-link to="./products/stole">
      <Button class="bg-white text-black px-12 p-4 rounded-full">Stole</Button>
    </Nuxt-link>
    <Nuxt-link to="./products/borde">
      <Button class="bg-white text-black px-12 p-4 rounded-full">Borde</Button>
    </Nuxt-link>
    <Nuxt-link to="./products/sofaer">
      <Button class="bg-white text-black px-12 p-4 rounded-full">Sofaer</Button>
    </Nuxt-link>
    <Nuxt-link to="./products/belysning">
      <Button class="bg-white text-black px-12 p-4 rounded-full"
        >Belysning</Button
      >
    </Nuxt-link>
    <Nuxt-link to="./products/tilbehoer">
      <Button class="bg-white text-black px-12 p-4 rounded-full"
        >Accessories</Button
      >
    </Nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["products"],

  data() {
    return {
      isButtonActive: false,
    };
  },
  methods: {
    setButtonActive: function () {
      this.isButtonActive = !this.isButtonActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: #fff;
  background-color: #090909;
}
.stole-button {
  font-size: 14px;
  font-weight: bold;
}
.borde-button {
  font-size: 14px;
  font-weight: bold;
}
.belysning-button {
  font-size: 14px;
  font-weight: bold;
}
.sofaer-button {
  font-size: 14px;
  font-weight: bold;
}
.reoler-button {
  font-size: 14px;
  font-weight: bold;
}
.tilbehoer-button {
  font-size: 14px;
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
