<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon.svg" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useFirebase } from '../composables/useFirebase'

const { getRatesDocument } = useFirebase()

onMounted(() => {
  getRatesDocument()
})
</script>
