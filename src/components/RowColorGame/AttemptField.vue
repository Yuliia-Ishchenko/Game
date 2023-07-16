<template>
  <div class="attemptField">
    <AttemptRow v-for="item in props.attemptCount" :key="item" 
    :rowNumber="item"
    :actualRow="actualRow"
    @checkAttempt="onCkeckAttempt"/>
    <Dialog  v-model:visible="isLose" modal header="You  LOSE!!!!" :style="{ width: '40vw' }">
      
   </Dialog>
  </div>
</template>

<script setup>
import {defineProps,ref, watch} from 'vue'
import { useStore } from 'vuex'
import AttemptRow from '@/components/RowColorGame/AttemptRow.vue'
import Dialog from 'primevue/dialog';
const props = defineProps({
  attemptCount: Number
})
const store = useStore();
const actualRow = ref(1)
const isLose = ref(false)
watch(()=>store.state.isStarted, ()=>{
   if(store.state.isStarted){
      actualRow.value = 1
   }
})
function onCkeckAttempt(){
  if(actualRow.value<props.attemptCount){
    actualRow.value = actualRow.value+1
  }
  else{
    isLose.value = true
  }
}
  
</script>


<style scoped lang="scss">
.attemptField{
   margin: 0 0.5rem;
}

</style>