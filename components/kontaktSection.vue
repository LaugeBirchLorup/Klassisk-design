<template>
  <div class="page-container flex gap-16 mt-10 flex-col md:flex-row my-12">
    <div class=" ">
      <figure class="rounded">
        <img
          class="relative rounded max-h-[rem] h-[48vh] object-cover sm:h-[85vh]"
          src="~/assets/scss/Rectangle 25.png"
          alt=""
        />
      </figure>
    </div>
    <div class="col-start-3 mt">
      <h1 class="aboutTitle">Send en besked</h1>

      <a
        href="mailto: contact@klassisk-design.com"
        class="aboutTekst text-blue-600 visited:text-purple-600 p-5"
      >
        contact@klassisk-design.com
      </a>

      <h1 class="aboutTitle mt-5">Giv os et kald</h1>

      <a
        href="Tel: +4545281950"
        class="aboutTekst text-blue-600 visited:text-purple-600 p-5"
        >+ 45 28 19 50</a
      >

      <h1 class="aboutTitle mt-5">Kig forbi vores butik</h1>

      <h2 class="aboutTekst">Skibhusvej 87, 5000 Odense, Danmark</h2>

      <h1 class="aboutTitle">Følg os på de sociale medier</h1>

      <a
        href="https://www.facebook.com/klassiskdesign"
        target="_blank"
        class="aboutTekst text-blue-600 visited:text-purple-600 p-5"
        >Facebook</a
      >
      <br />

      <a
        href="https://www.instagram.com/klassiskdesign/"
        target="_blank"
        class="aboutTekst text-blue-600 visited:text-purple-600 p-5"
        >Instagram</a
      >
    </div>
    <div class="col-start-4">
      <h1 class="aboutTitle">Åbningstider</h1>

      <h2 class="aboutTekst">Mandag - Lukket</h2>

      <h2 class="aboutTekst">Tirsdag - Lukket</h2>

      <h2 class="aboutTekst">Onsdag - 13:00 - 17:30</h2>

      <h2 class="aboutTekst">Torsdag - 13:00 - 17:30</h2>

      <h2 class="aboutTekst">Fredag - 13:00 - 17:30</h2>

      <h2 class="aboutTekst">Lørdag - 13:00 - 14:00</h2>

      <h2 class="aboutTekst">Søndag - Lukket</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutTitle {
  font-family: var(--defaultFont);
  font-size: 24px;
  margin-bottom: 5px;
}

.aboutTekst {
  font-family: var(--defaultFont);
  font-size: 16px;
  margin-bottom: 45px;
}
</style>
