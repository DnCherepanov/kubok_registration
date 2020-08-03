<template>
  <div class="admin-layout-wrap">
    <el-container :style="{ height: '100%' }">
      <el-header>
        <el-button round type="info" @click="$router.push('/admin/logout')">
          Выйти
        </el-button>
      </el-header>
      <el-main><nuxt /></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error
    },
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message)
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>


