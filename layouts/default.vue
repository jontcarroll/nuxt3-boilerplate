<template>
  <main class="flex">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style>
  html,
  body,
  #__nuxt,
  #__layout {
    @apply !min-h-[100dvh] !w-full bg-base-100;
  }
</style>
