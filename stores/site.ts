import { defineStore } from 'pinia'

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
