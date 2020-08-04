<template>
  <el-table :data="participants" style="width: 100%;">
    <el-table-column prop="name" label="ФИО"> </el-table-column>
    <el-table-column label="Дата рождения">
      <template slot-scope="{ row: { date } }">
        <i class="el-icon-date"></i>
        <span style="margin-left: 10px;">{{ date | date('date') }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Телефон">
      <template slot-scope="{ row: { phone } }">
        <i class="el-icon-phone"></i>
        <span style="margin-left: 10px;">{{ phone }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Дисциплина">
      <template slot-scope="{ row: { type } }">
        <i class="el-icon-star-on"></i>
        <span style="margin-left: 10px; word-break: break-word;">{{
          type.join(', ')
        }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="partner1" label="Партнер (парный разряд)">
    </el-table-column>
    <el-table-column prop="partner2" label="Партнер (смешанный разряд)">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head: {
    title: `Аналитика | ${process.env.appName}`,
  },
  async asyncData({ store }) {
    const participants = await store.dispatch('participant/fetchAdmin')
    return { participants }
  },
}
</script>

