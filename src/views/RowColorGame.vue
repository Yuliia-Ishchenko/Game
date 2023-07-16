<template>
  <div class="RowColorGame">
    <div class="header">
      <ControlPanel @start="onStart" @openAnswer="onOpenAnswer" />
      <HideColors/>
    </div>
    <PlayingField class="playing-field"/>
    <ColorPalette @selectColor="onselectColor" class="color-palette"/>
  </div>
</template>

<script setup>
// import {computed} from 'vue'
import { useStore } from 'vuex'
import ControlPanel from '@/components/RowColorGame/ControlPanel.vue'
import HideColors from '@/components/RowColorGame/HideColors.vue'
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

.RowColorGame {
  
  display: block;
  // height: 100vh;
  margin: auto;
}

.header {
  position: fixed;
  background: white;
  z-index: 1;
  top: 0;
  width: 100%; /* Установите ширину 100%, чтобы расширить блок на всю ширину родительского контейнера */
}

.playing-field {
  margin-top: 100px; /* Задайте отступ сверху, чтобы компонент PlayingField не перекрывался заголовком */
}

.color-palette {
  position: fixed;
  background: white;
  bottom: 0;
}
</style>