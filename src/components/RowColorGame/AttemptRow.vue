<template>
  <div class="attemptRow" >
   <div class="attemptRow-number" :style="`font-weight: ${!clickable?'100':'800'}; border: 2px solid ${!clickable?'#fff':'#d9d7d7'};`" >
      {{props.rowNumber}}
   </div>
   <div class="attemptRow-circles">
      <Circle v-for="(item,index) in attemptRowColor" :key="index" 
      :clickable="clickable" 
      @onClickCircle="onSelectedCircle(index)"
      :background="`${item}`"/>
   </div>
   <div class="attemptRow-control">
      <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" :disabled="!clickable" @click="onCancel"/>
      <Button icon="pi pi-check" text rounded aria-label="Filter" :disabled="!clickable" @click="onCheck"/>
   </div>
   <div class="attemptRow-squeares">
      <Square v-for="(item,index) in checkRowColor" :key="index"
      :background="`${item}`"/>
   </div>
   <Dialog  v-model:visible="isWin" modal header="You are WINNER!!!!" :style="{ width: '50vw' }">
      <p class="dialog-img">
         <img src="@/assets/istockphoto-1183756124-612x612.jpg" alt="Winner">
      </p>
   </Dialog>
  </div>
  
</template>

<script setup>
import { useStore } from 'vuex'
import Circle from '@/components/RowColorGame/Circle.vue'
import Square from '@/components/RowColorGame/Square.vue'
import {defineProps, computed, ref, defineEmits, watch} from 'vue'
import Dialog from 'primevue/dialog';
const emit = defineEmits(['checkAttempt'])
const props = defineProps({
  rowNumber: Number,
  actualRow: Number
})
const store = useStore();
const isGenerated = computed(()=>store.state.isGenerated)
const clickable = computed(()=>(props.actualRow==props.rowNumber&&isGenerated.value)?true:false)
const attemptRowColor = ref(["","","",""])
const checkRowColor = ref(["","","",""])
const isWin = ref(false)
watch(()=>store.state.isStarted, ()=>{
   if(store.state.isStarted){
      onCancel()
   }
})
function onSelectedCircle(index){
   const selectedColor = store.state.selectedColor
   if(attemptRowColor.value[index]==selectedColor){
      store.commit('setSelectedColor', "")
   }
   attemptRowColor.value[index] = store.state.selectedColor
}
function onCancel(){
   store.commit('setSelectedColor', "")
   attemptRowColor.value = ["","","",""]
   checkRowColor.value = ["","","",""]
}
function onCheck(){
    if(attemptRowColor.value.includes("")){
      console.log("Не заполнены все цвета");
      return
   }
   checkLogic()
   if(!isWinner()){
      emit('checkAttempt')
   }
   
}
function checkLogic(){
   const randomColors = store.state.randomColors
   checkRowColor.value = ["","","",""]
   randomColors.forEach((rc,index) => {
      const color = `#${rc}`;
    const emptyIndex = checkRowColor.value.findIndex((item) => item === "");
    
    if (attemptRowColor.value[index] === color) {
      checkRowColor.value[emptyIndex] = '#000';
      return;
    }
    if (attemptRowColor.value.includes(color)) {
      checkRowColor.value[emptyIndex] = '#d9d7d7';
      return;
    }
  });
  checkRowColor.value.sort().reverse()
}
function isWinner(){
   const result = checkRowColor.value.every((color) => color === '#000')
   if(result){
      isWin.value = true
   }
   return result
}
</script>



<style scoped lang="scss">
.attemptRow, .attemptRow-circles, .attemptRow-squeares{
   display: flex;
   align-items:center;

   &-number{
      width: 35px;
      padding: 5px;
      border-radius: 17px;
   }
   &-control{
      margin-right: 1rem;
   }
   &-squeares{
      border-left: 2px solid rgb(236, 236, 236);
      padding-left: 0.2rem;
   }
   
}
.dialog-img{
   display: flex;
   justify-content:center
}
</style>