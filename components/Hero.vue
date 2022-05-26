<template>
  <div
    class="relative page-container rounded z-1 h-screen w-full"
    :class="{ removeImage: isBurgerActive }"
  >
    <figure class="frontpage_hero h-fit">
      <img
        class="rounded-md relative max-h-[rem] h-[83vh] w-full object-cover sm:h-[85vh]"
        src="~/assets/scss/heroforside.jpg"
        alt=""
      />
    </figure>
    <h1
      class="hero-text text-4xl leading-12 md:text-5xl lg:text-7xl lg:leading-[110px] text-white absolute hero-text"
    >
      Udforsk istandsatte danske møbel klassikere
    </h1>
    <button
      class="hero-button rounded-full px-8 bg-white text-black p-3 m-auto text-sm sm:p-4"
    >
      SE MERE HER
    </button>
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
.frontpage_hero::before {
  border-radius: 8px;
  content: "";
  display: block;
  height: 85%;
  position: absolute;
  opacity: 0.3;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #090909;
}
@media (max-width: 650px) {
  .frontpage_hero::before {
    border-radius: 8px;
    content: "";
    display: block;
    height: 83%;
    position: absolute;
    opacity: 0.3;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: #090909;
  }
}
.hero-text {
  z-index: 3;
}
.hero-button {
  z-index: 3;
}
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
