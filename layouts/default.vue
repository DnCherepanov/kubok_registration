<template>
  <div class="bkg">
    <div class="container page-animation">
      <section class="logoArea">
        <div class="logo">
          <Logo />
        </div>
      </section>
      <section class="buttonArea">
        <Form />
      </section>
      <section class="introArea">
        <div
          class="introArea__nested"
          style="justify-self: end; margin-right: 12%; align-self: center;"
        >
          <Ball />
        </div>
        <div class="introArea__nested">
          <nuxt />
        </div>
      </section>
      <section class="mainArea">
        <div class="mainArea__nested">
          <h1>
            Кубок мэра
          </h1>
        </div>
        <div class="mainArea__nested">
          <Counter
            :year="2020"
            :month="7"
            :date="15"
            :hour="9"
            :minute="0"
            :second="0"
            :millisecond="0"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bkg {
  background: url(../static/bkg.svg);
  background-size: cover;
}
.container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 4vw;
  height: 100vh;
  overflow: hidden;
}
.logoArea {
  justify-self: center;
  align-self: center;
}
.buttonArea {
  justify-self: center;
  align-self: center;
}
.introArea__nested > div {
  margin-left: 12%;
  font-size: 15px;
  color: #fff;
  line-height: 1.4;
}
.mainArea {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
}
.mainArea__nested {
  justify-self: center;
  align-self: baseline;
}
.introArea {
  display: grid;
  grid-template-rows: 48% 1fr;
  grid-template-columns: 1fr;
}
.introArea__nested {
  justify-self: center;
  align-self: baseline;
}
.introArea__nested svg {
  width: 12vw;
  max-width: 88px;
}
.logo svg {
  width: 30vw;
  max-width: 180px;
}
</style>
