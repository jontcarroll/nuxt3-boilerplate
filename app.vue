<template>
  <NuxtLayout>
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

  const site = SiteStore.use()

  useHead({
    title: site.title
  })
</script>
