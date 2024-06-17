import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'

export class SiteStore {
  static use = defineStore('site', () => {
    const title = ref('Nuxt 3 Boilerplate')

    const theme = ref('dark')

    return {
      title,
      theme
    }
  })
}
