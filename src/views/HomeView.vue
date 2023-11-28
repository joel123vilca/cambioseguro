<template>
  <div class="home">
    <Description />
    <ChangeMoney />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useFirebase } from '../composables/useFirebase'
import Description from '../components/InfoChangeMoney.vue'
import ChangeMoney from '../components/ChangeMoney.vue'

const { getRatesDocument } = useFirebase()

onMounted(() => {
  getRatesDocument()
})
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
@media (max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
    gap: 0px;
  }
}
</style>
