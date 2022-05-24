<template>
  <div class="flex gap-3 mt-12 mb-12 w-full h-full items-center justify-center">
    <div
      class="container flex items-center justify-left lg:justify-center flex-col lg:flex-row gap-12"
    >
      <div
        class="contentText mt-3 lg:w-[30rem] ml-0 lg:ml-9 page-wrapper mb-6 w-fit mr-[45px] lg:mr-16"
      >
        <h3 class="notTitle text-3xl">Giv dine møbler nyt liv</h3>
        <h1
          class="title text-4xl xs:text-5xl mb-3 leading-[48px] md:leading[64px] lg:leading-[64px]"
        >
          Renovering & Istandsættelse
        </h1>
        <p class="description mb-12 text-sm lg:w-[30rem]">
          I Klassisk Design bringer vi livet tilbage i gamle designklassikere og
          andre kvalitetsmøbler. Ved at udbyde reperation og restaurering af
          møbler, kan private, såvel som institutioner, få glæde af deres gamle
          møbler i fuldkommen istandsættelse. Vi tror på grundigt håndværk, og
          arbejder intensivt for, at vores kunder ender med en kavalitativ og
          gennemført restauration eller istandsættelse.r det varme og sjæl.
        </p>
        <button class="cta-button">Kom i kontakt med os her</button>
      </div>
      <div class="contentImg lg:w-1/3 lg:h-1/3">
        <img
          class="w-full h-full object-cover"
          src="~/assets/scss/istandsaettelse-1.png"
          alt=""
        />
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
