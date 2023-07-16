<template>
  <div class="RowColorGame">
    <ControlPanel msg="Welcome to Your Vue.js App" @start="onStart" @openAnswer="onOpenAnswer"/>
    <PlayingField msg="Welcome to Your Vue.js App"/>
    <ColorPalette msg="Welcome to Your Vue.js App" @selectColor="onselectColor"/>
  </div>
</template>

<script setup>
// import {computed} from 'vue'
import { useStore } from 'vuex'
import ControlPanel from '@/components/RowColorGame/ControlPanel.vue'
import PlayingField from '@/components/RowColorGame/PlayingField.vue'
import ColorPalette from '@/components/RowColorGame/ColorPalette.vue'
import {Colors} from '@/enums/ColorEnum.js'

const store = useStore()

// const randomColors = computed(()=>store.state.randomColors)

function onStart(){
  store.commit('setRandomColors', genearteRandomColors())
}

function onOpenAnswer(){
  console.log('openAnswer')
}
function onselectColor(index){
  store.commit('setSelectedColor', `#${Colors[index]}`)
}
function genearteRandomColors() {
  const keys = Object.keys(Colors);
  const randomColors = [];

  const availableKeys = [...keys];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * availableKeys.length);
    const randomKey = availableKeys.splice(randomIndex, 1)[0];
    randomColors.push(Colors[randomKey]);
  }

  return randomColors;
}
</script>

<style scoped lang="scss">
.RowColorGame{
  max-width: 40rem;
  margin: auto;
}
</style>