<template>
  <div class="hideColors">
      <Circle v-for="(item,index) in hideCircleArr" :key="index" 
      :showCheck="item.showCheck"
      :style="`background: #${item.background}`"/>
  </div>
</template>

<script setup>
import Circle from '@/components/RowColorGame/Circle.vue'
import { useStore } from 'vuex'
import {watch,ref}from 'vue'

const store = useStore();
const delay = 500 
const hideCircleArr = ref(getDefaultHideCircleArr())

watch(()=>store.state.isStarted,()=>{
  if(!store.state.isStarted){
    showNewBackground()
    console.log(hideCircleArr.value);
    return
  } 
  hideCircleArr.value = getDefaultHideCircleArr()
  hideCircleArr.value.forEach((item,index)=>{
    getShowCheck(index, index*delay)
  })
})
function getDefaultHideCircleArr(){
  return [
    {background: 'FFF', showCheck: false},
    {background: 'FFF', showCheck: false},
    {background: 'FFF', showCheck: false},
    {background: 'FFF', showCheck: false}
  ]
}
function showNewBackground(){
  const randomColors = store.state.randomColors
  randomColors.forEach((item,index)=>{
    hideCircleArr.value[index].showCheck = false //remove ikon check
    hideCircleArr.value[index].background = item //set background
  })
}
function getShowCheck(index,delay){
  setTimeout(() => {
    hideCircleArr.value[index].showCheck = true
    if(index == 3){
      store.commit('setIsGenerated', true)
    }
    
  }, delay)
}
</script>


<style scoped lang="scss">
.hideColors{
   display: flex;
   justify-content:center;
}

</style>