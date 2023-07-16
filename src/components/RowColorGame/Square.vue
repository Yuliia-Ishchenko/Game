<template>
  <div class="square" :style="`background: ${props.background}; `">
    
  </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  background: String
})
</script>


<style scoped lang="scss">
.square{
   border: 1px solid rgb(157, 157, 157);
   width: 20px;
   height: 20px;
   border-radius: 5px;
   margin: 3px;
}
</style>