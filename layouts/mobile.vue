<template>
  <div class="bkgMobile page-animation">
    <div :style="{ height: height + 'px' }" class="container">
      <section class="logoArea">
        <div class="logo">
          <Logo />
        </div>
      </section>
      <section class="mainArea">
        <div
          class="mainArea__nested"
          style="justify-self: end; align-self: end;"
        >
          <ball />
        </div>
        <div>
          <h2>Старт турнира<br /><strong>15 Августа 2020</strong></h2>
        </div>
      </section>
      <section class="buttonArea">
        <Form
          drawerDirection="btt"
          drawerSize="100%"
          :witdhHeader="true"
          buttonClass="button-mobile"
        />
        <div class="intro">
          <Nuxt />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 0,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.height = window.innerHeight
    },
  },
}
</script>

<style lang="scss" scoped>
.bkgMobile {
  background: url(../static/bkgMobile.svg);
  background-size: cover;
}
.container {
  display: grid;
  grid-template-rows: 30% 30% 40%;
  max-height: 100vh;
}
.logoArea {
  justify-self: center;
  align-self: center;
}
.logo svg {
  width: 150px;
}
.mainArea {
  display: grid;
  grid-template-columns: 38% 62%;
}
.mainArea__nested svg {
  width: 12vw;
}
.mainArea h2 {
  transform: rotate(-26deg);
  font-weight: 100;
  font-size: 22px;
  text-align: center;
  padding-top: 20%;
  padding-right: 5%;
  letter-spacing: 1px;
}
strong {
  font-weight: 400;
}

.buttonArea {
  background-color: #fff;
  display: grid;
  grid-template-rows: 40% 1fr;
  justify-items: center;
  align-items: center;
}
.intro {
  align-self: baseline;
  text-align: center;
  font-size: 11px;
  padding: 0 20px;
  color: #333;
  letter-spacing: 1px;
  line-height: 1.5;
}

.logo svg {
  width: 40vw;
  max-width: 150px;
}

@media (orientation: landscape) {
  .container {
    grid-template-rows: none;
    grid-template-columns: 3fr 1fr 4fr;
  }
  .mainArea {
    display: block;
    grid-template-columns: none;
    justify-self: end;
    align-self: end;
  }
  .mainArea h2 {
    display: none;
  }
}
</style>
