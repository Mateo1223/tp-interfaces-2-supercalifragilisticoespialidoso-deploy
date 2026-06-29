import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    console.log('[useDarkMode] Inicializando hook')

    const stored = localStorage.getItem('dark-mode')
    console.log('[useDarkMode] Valor en localStorage:', stored)

    if (stored !== null) {
      const parsed = stored === 'true'
      console.log('[useDarkMode] Usando valor de localStorage:', parsed)
      return parsed
    }

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches

    console.log('[useDarkMode] No hay valor guardado. Preferencia del sistema:', systemPreference)

    return systemPreference
  })

  useEffect(() => {
    console.log('[useDarkMode] useEffect ejecutado')
    console.log('[useDarkMode] Estado dark:', dark)

    document.documentElement.classList.toggle('dark', dark)
    console.log(
      '[useDarkMode] Clase "dark" presente:',
      document.documentElement.classList.contains('dark'),
    )

    localStorage.setItem('dark-mode', String(dark))
    console.log('[useDarkMode] Guardado en localStorage:', localStorage.getItem('dark-mode'))
  }, [dark])

  const toggle = () => {
    console.log('[useDarkMode] Toggle presionado')
    console.log('[useDarkMode] Estado actual:', dark)

    setDark((prev) => {
      const next = !prev
      console.log('[useDarkMode] Cambiando de', prev, 'a', next)
      return next
    })
  }

  console.log('[useDarkMode] Render. Valor actual:', dark)

  return { dark, toggle }
}
