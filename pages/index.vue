<template>
  <div>
    <p>
      Традиционные ежегодные соревнования по большому теннису на Кубок мэра
      Южно-Сахалинска.<br />Cоревнования проходят на теннисных кортах городского
      парка культуры и отдыха им. Ю.Гагарина.<br />
      Можно заполнить анкету онлайн, либо записаться по телефону 607-999.
      <el-link
        @click="moreInfo = true"
        type="primary"
        style="font-weight: normal; vertical-align: inherit;"
        :class="{ introLink: $device.isDesktop }"
      >
        Подробнее о турнире...
      </el-link>
    </p>

    <el-dialog
      title="Информация о турнире"
      :visible.sync="moreInfo"
      :fullscreen="$device.isMobile ? true : false"
    >
      <p class="info">
        Традиционные ежегодные соревнования по большому теннису на Кубок мэра
        Южно-Сахалинска. Cоревнования проходят на теннисных кортах городского
        парка культуры и отдыха им. Ю.Гагарина.
      </p>
      <p class="info">
        <b>С 15.06 по 30.06</b> пройдут соревнования среди детей. Регистрация
        участников среди детей заканчивается <b>13 августа.</b>
      </p>
      <p class="info">
        <b>С 01.09 по 13.09</b> пройдут соревнования среди взрослых. Регистрация
        участников среди взрослых заканчивается <b>27 августа</b>.
      </p>
      <h4 class="info">
        Дополнительная информация по телефону по телефону 607-999.
      </h4>
    </el-dialog>
  </div>
</template>

<script>
export default {
  layout: (ctx) => (ctx.isMobile ? 'mobile' : 'default'),
  head: {
    title: `${process.env.appName}`,
    description: `кубок мэра Южно-Сахалинска по теннису`,
  },
  data() {
    return {
      moreInfo: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.info {
  word-break: break-word;
  text-align: left;
  padding-bottom: 10px;
  line-height: 1.4;
  letter-spacing: normal;
}
h4 {
  text-align: left;
  word-break: break-word;
}
.introLink {
  color: #333 !important;
  &::after {
    border-color: #333 !important;
  }
}
.el-drawer__body {
  padding: 30px;
}
</style>