<template>
  <div
    class="relative page-container rounded z-1 h-screen w-full"
    :class="{ removeImage: isBurgerActive }"
  >
    <figure class="rounded">
      <img
        class="relative rounded max-h-[rem] h-[83vh] w-full object-cover sm:h-[85vh]"
        src="~/assets/scss/aboutPic.png"
        alt=""
      />
    </figure>
    <h1
      class="text-2xl leading-12 md:text-3xl lg:text-5xl xl:text-7xl lg:leading-[90px] xl:leading-[110px] text-white absolute hero-text"
    >
      Kom og kig forbi min forretning
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
  top: 40%;
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
