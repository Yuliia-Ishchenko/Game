<template>
  <div class="playingField">
    <HideColors/>
    <div class="activeField">
      <AttemptField :attemptCount="attemptCount"/>
    </div>
  </div>
</template>

<script setup>
// import {defineProps} from 'vue'
import HideColors from '@/components/RowColorGame/HideColors.vue'
import AttemptField from '@/components/RowColorGame/AttemptField.vue'
// const props = defineProps({
//   msg: String
// })
const attemptCount = 10;
</script>


<style scoped lang="scss">
.activeField{
  display: flex;
  justify-content: center;
}

</style>