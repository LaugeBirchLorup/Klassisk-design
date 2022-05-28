<template>
    <div class="page-container grid grid-cols-4 gap-4">
        <div class="col-start-1 col-span-2">
            <figure class="rounded">
                <img
                class="relative rounded max-h-[rem] h-[83vh] object-cover sm:h-[85vh]"
                src="~/assets/scss/Rectangle 25.png"
                alt=""
                />
            </figure>
        </div>
        <div class="col-start-3">
            <h1 class="aboutTitle">Send en besked</h1>
            <br>
            <a href="mailto: contact@klassisk-design.com" class="aboutTekst"> contact@klassisk-design.com </a>
            <br>
            <br>
            <br>
            <h1 class="aboutTitle">Giv os et kald</h1>
            <br>
            <a href="Tel: +4545281950" class="aboutTekst">+ 45 28 19 50</a>
            <br>
            <br>
            <br>
            <h1 class="aboutTitle">Kig forbi vores butik</h1>
            <br>
            <h2 class="aboutTekst">Skibhusvej 87, 5000 Odense, Danmark</h2>
            <br>
            <br>
            <br>
            <h1 class="aboutTitle">Følg os på de sociale medier</h1>
            <br>
            <a href="https://www.facebook.com/klassiskdesign" target="_blank" class="aboutTekst">Facebook</a>
            <br>
            <br>
            <a href="https://www.instagram.com/klassiskdesign/" target="_blank" class="aboutTekst">Instagram</a>

        </div>
        <div class="col-start-4">
            <h1 class="aboutTitle">Åbningstider</h1>
            <br>
            <h2 class="aboutTekst">Mandag - Lukket</h2>
            <br>
            <br>
            <h2 class="aboutTekst">Tirsdag - Lukket</h2>
            <br>
            <br>
            <h2 class="aboutTekst">Onsdag - 13:00 - 17:30</h2>
            <br>
            <br>
            <h2 class="aboutTekst">Torsdag - 13:00 - 17:30</h2>
            <br>
            <br>
            <h2 class="aboutTekst">Fredag - 13:00 - 17:30</h2>
            <br>
            <br>
            <h2 class="aboutTekst">Lørdag - 13:00 - 14:00</h2>
            <br>
            <br>
            <h2 class="aboutTekst">Søndag - Lukket</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.aboutTitle {
  font-family: var(--defaultFont);
  font-size: 24px;
}

.aboutTekst {
  font-family: var(--defaultFont);
  font-size: 16px;
}
</style>