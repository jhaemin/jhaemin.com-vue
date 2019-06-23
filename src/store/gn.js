export const state = () => ({
  hidden: false
})

export const mutations = {
  hide(state) {
    state.hidden = true
  },
  show(state) {
    state.hidden = false
  }
}