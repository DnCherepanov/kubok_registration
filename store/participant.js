export const actions = {
  async create({ commit }, data) {
    try {
      return await this.$axios.$post('/api/participant', data)
    } catch (e) {
      commit('setError', e, { root: true })
    }
  },
  async fetchAdmin({ commit }) {
    try {
      return await this.$axios.$get('/api/participant/admin')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
}
