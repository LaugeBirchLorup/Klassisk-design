<template>
  <div class="h-full text-center mb-12 page-container">
    <h2 class="header text-3xl mb-2 md:text-4xl">KLASSISK DESIGN</h2>

    <h1
      class="main_header text-5xl md:text-7xl md:w-1/2 leading-[48px] m-auto mb-6 md:leading-[76px]"
    >
      Vi renovere og sælger danske klassiskere
    </h1>
    <p class="main_content m-auto mb-3 text-md md:w-1/4">
      I Klassisk Design finder du en del snedkermestermøbler i både Teak og Eg,
      samt møbler fra Danske arkitektklassikere som Arne Jacobsen, Hans J.
      Wegner, Poul Kjærholm, m.fl.
    </p>
    <button
      class="hero-button rounded-full px-8 bg-black text-white p-3 m-auto text-sm sm:p-4 mt-6"
    >
      SE ALLE MØBLER
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  font-family: var(--secondaryFont);
  font-weight: 300;
}

.main_header {
  font-family: var(--secondaryFont);
  font-weight: 900;
}
.main_content {
  font-family: var(--defaultFont);
}
</style>
