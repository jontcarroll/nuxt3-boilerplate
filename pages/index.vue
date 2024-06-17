<template>
  <div class="flex h-[100vh] w-full items-center justify-center">
    <h1 class="font-chakra text-4xl text-primary">Hello World!</h1>
  </div>
</template>

<script setup lang="ts">
  const site = SiteStore.use()
  site.title = 'Home'
</script>
