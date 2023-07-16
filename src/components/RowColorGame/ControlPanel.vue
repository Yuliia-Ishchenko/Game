<template>
  <div class="ControlPanel">
    <Button label="Start" @click="Start" :disabled="isGenerated"/>
    <Button label="Open answer" @click="OpenAnswer" :disabled="!isGenerated"/>
  </div>
</template>

<script setup>
import {computed, defineEmits} from 'vue'
import { useStore } from 'vuex'
const store = useStore();
const emit = defineEmits(['start', 'openAnswer'])
const isGenerated = computed(()=>store.state.isGenerated)

function Start(){
  emit('start');
  SetIsStarted(true)
}
function OpenAnswer(){
  emit('openAnswer');
  SetIsStarted(false)
  store.commit('setIsGenerated', false)
}

function SetIsStarted(value){
  store.commit('setIsStarted', value)
}
</script>

<style scoped lang="scss">
.ControlPanel{
  margin: 0.5rem 1rem;
  border-bottom: 2px solid rgb(236, 236, 236);
  padding: 1rem;

  button {
    margin: 0 2rem;
  }
}
</style>