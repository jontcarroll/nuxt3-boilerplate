<template>
  <component :is="icon" />
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string
  }>()

  const icon = defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg?component`))
</script>
