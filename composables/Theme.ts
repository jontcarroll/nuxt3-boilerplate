import { useDark, useToggle } from '@vueuse/core'

export class Theme {
  static override(theme: Theme) {
    const site = SiteStore.use()
  }

  static use() {
    const isDark = useDark({
      selector: 'html',
      attribute: 'data-theme',
      valueDark: 'dark',
      valueLight: 'light',
      storageKey: 'theme'
    })

    const toggleDark = useToggle(isDark)

    return {
      isDark,
      toggleDark
    }
  }
}
