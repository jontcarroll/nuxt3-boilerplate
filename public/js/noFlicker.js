/*
 * set data-theme attribute based on localStorage OR browser preference to prevent flickering caused by SSR
 */

if (isTheme('dark')) {
  document.documentElement.setAttribute('data-theme', 'dark')
}

if (isTheme('light')) {
  document.documentElement.setAttribute('data-theme', 'light')
}

function isTheme(theme) {
  return (
    localStorage.theme === theme ||
    (!('theme' in localStorage) && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches)
  )
}
