<template>
  <div class="circle" @click="onCircleClick" 
  :class="{ 'clickable': props.clickable }"
  :style="`background: ${props.background}; border: 1px solid ${props.background};`"
  >
    <span v-if="props.showCheck" class="check">&#10003;</span>
  </div>
</template>

<script setup>
import {defineProps,defineEmits} from 'vue'
const emit = defineEmits(['onClickCircle'])
const props = defineProps({
  showCheck: Boolean,
  clickable: Boolean,
  background: String
})
function onCircleClick(){
  if(!props.clickable){
    return
  }
  emit('onClickCircle')

}
</script>


<style scoped lang="scss">
.circle{
   border: 2px solid rgb(157, 157, 157);
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    
}
@media (max-width: 768px) {
  .circle {
    width: 35px;
    height: 35px; 
    border-radius: 18px;
    font-size: 20px; 
  }
}
.check {
  color: #71c571;
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.circle.clickable:hover {
  cursor: pointer; /* Курсор "напалец" */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>