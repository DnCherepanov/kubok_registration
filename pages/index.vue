<template>
  <p>
    Традиционные ежегодные соревнования по большому теннису на Кубок мэра
    Южно-Сахалинска.<br />Турнир проходит на теннисных кортах городского парка
    культуры и отдыха им. Ю.Гагарина.<br />
    Регистрация участников заканчивается 15 августа.
  </p>
</template>

<script>
export default {
  layout: (ctx) => (ctx.isMobile ? 'mobile' : 'default'),
  head: {
    title: `${process.env.appName}`,
    description: `кубок мэра Южно-Сахалинска по теннису`,
  },
}
</script>

<style lang="scss" scoped>
</style>
