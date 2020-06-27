<template>
  <el-container>
    <AppLogo />
    <el-header>
      <AppNavigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>
<script>
import AppNavigation from '@/components/main/Navigation'
import AppLogo from '@/components/main/Logo.vue'
export default {
  components: {
    AppNavigation,
    AppLogo
  }
}
</script>
<style>
</style>
