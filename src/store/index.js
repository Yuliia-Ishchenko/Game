import { createStore } from 'vuex'

export default createStore({
  state: {
    randomColors: [],
    isStarted:  false,
    isGenerated: false,
    selectedColor: ''
  },
  mutations: {
    setRandomColors : (state,value) => state.randomColors = value,
    setIsStarted : (state,value) => state.isStarted = value,
    setIsGenerated : (state,value) => state.isGenerated = value,
    setSelectedColor : (state,value) => state.selectedColor = value,
  },
  getters: {
    getRandomColors: (state) => state.randomColors,
    getIsStarted: (state) => state.isStarted,
    getIsGenerated: (state) => state.isGenerated,
    getSelectedColor: (state) => state.selectedColor,
  },
  actions: {
  },
  modules: {
  }
})
