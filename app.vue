<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
  import { SiteStore } from '~/stores/site'

  const site = SiteStore.use()

  useHead(
    computed(() => ({
      title: site.title,
      htmlAttrs: { 'data-theme': site.theme ?? 'light' }
    }))
  )
</script>
