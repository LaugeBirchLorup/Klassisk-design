<template>
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
      PRODUKTER
    </h1>
  </div>
</template>

<script>
export default {
  name: "Hero",

  computed: {
    isBurgerActive() {
      return this.$store.state.mobileNavVisible;
    },
    mobileNav() {
      return this.$store.state.mobileNavVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
