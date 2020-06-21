import config from '@/config'
export default {
  namespaced: true,
  state: {
    isMobile: false,
    animates: require('@/config/animates'),
    ...config
  },
  mutations: {
    setDevice (state, isMobile) {
      state.isMobile = isMobile
    },
    setTheme (state, theme) {
      state.theme = theme
    },
    setLayout (state, layout) {
      state.layout = layout
    },
    setMultiPage (state, multiPage) {
      state.multiPage = multiPage
    },
    setAnimate (state, animate) {
      state.animate = animate
    },
    setThemeColor (state, color) {
      state.themeColor = color
    },
    setWeekMode(state, weekMode) {
      state.weekMode = weekMode
    },
    setFixedHeader(state, fixedHeader) {
      state.fixedHeader = fixedHeader
    },
    setFixedSider(state, fixedSider) {
      state.fixedSider = fixedSider
    }
  }
}