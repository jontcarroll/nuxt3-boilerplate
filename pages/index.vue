<template>
  <div class="flex h-[100vh] w-full flex-col items-center justify-center gap-5">
    <h1 class="font-chakra text-4xl text-primary">Hello World!</h1>
    <DarkModeSelector />
  </div>
</template>

<script setup lang="ts">
  const site = SiteStore.use()
  site.title = 'Home'
</script>
