<template>
  <NuxtLayout name="default">
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in'
      }"
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  import { SiteStore } from '~/stores/site'

  const route = useRoute()

  const site = SiteStore.use()

  useHead(
    computed(() => ({
      title: site.title,
      htmlAttrs: { 'data-theme': site.theme ?? 'light' }
    }))
  )
</script>