<template>
  <div
    class="flex gap-3 -mt-12 mb-12 w-full h-full items-center justify-center"
  >
    <div
      class="container flex items-center justify-left lg:justify-center flex-col-reverse lg:flex-row gap-12"
    >
      <div class="contentImg lg:w-1/3 lg:h-1/3">
        <img
          class="w-full h-full object-cover"
          src="~/assets/scss/Helle.png"
          alt=""
        />
      </div>
      <div
        class="contentText mt-3 lg:w-[30rem] ml-0 lg:ml-9 page-wrapper mb-6 w-fit mr-[45px] lg:mr-16"
      >
        <h3 class="notTitle text-3xl">Etableret i 2016</h3>
        <h1
          class="title text-4xl xs:text-5xl mb-3 leading-[48px] md:leading[64px] lg:leading-[64px]"
        >
          OMKRING MIN FORRETNING
        </h1>
        <p class="description mb-12 text-sm lg:w-[30rem]">
          I  Klassisk Design finder du en del snedkermestermøbler i både Teak 
          og Eg, samt møbler fra Danske arkitektklassikere som Arne 
          Jacobsen, Hans J. Wegner, Poul Kjærholm, Børge Mogensen, Poul A. 
          Volter, Verner Panton Mogens Koch, Nanna Ditzel samt Kai 
          Kristiansen m.fl.
            
          Møbler lavet med passion og kvalitet – et stykke af den Danske Kulturarv.

          Stilrene, smukke, attraktive professionelt istandsatte Klassiske 
          Designer møbler, der forskønner dit hjem og giver det varme og sjæl.
        </p>
        <button class="cta-button">Kom i kontakt med os her</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notTitle {
  font-family: var(--secondaryFont);
}

.title {
  font-family: var(--secondaryFont);
  font-weight: 700;

  text-transform: uppercase;
}

.description {
  font-family: var(--defaultFont);

  line-height: 30px;
}

.cta-button {
  text-decoration: underline;
}
</style>
