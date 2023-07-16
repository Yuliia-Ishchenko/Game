<template>
  <div class="colorPalette">
    <Button v-for="(item, index) in Object.entries(Colors)" 
      :key="index" rounded  
      :style="`background: #${item[1]}; border: 1px solid #${item[1]};`" 
      @click="emit('selectColor', item[0])"
      :disabled="!isGenerated"/>
  </div>
</template>

<script setup>
import {defineEmits, computed}from 'vue'
import { useStore } from 'vuex'
import {Colors} from '@/enums/ColorEnum.js'
// const props = defineProps({
//   msg: String
// })
const store = useStore();
const isGenerated = computed(()=>store.state.isGenerated)
const emit = defineEmits(['selectColor'])
</script>


<style scoped lang="scss">
.colorPalette{
  margin: 0.5rem 0;
  border-top: 2px solid rgb(236, 236, 236);
  padding: 1rem;

  button{
    margin: 0 0.4rem;
  }
}
</style>