'use client'

import { ReactNode, useEffect } from 'react'
import { Providers } from './providers'
import { useRouter, usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import '@mantine/core/styles.css'
import '../styles/globals.scss'

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core'
import {
  LOCAL_STORAGE,
  SESSION_EXPIRATION_TIME,
} from '@/components/utils/utils.constants'

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' || pathname.startsWith('/admin')) {
      const storedUsername = localStorage.getItem(LOCAL_STORAGE.USERNAME)
      if (pathname === '/login/forgot') return

      if (!storedUsername) {
        router.push('/login')
        return
      }
      const sessionTimestamp = localStorage.getItem(
        LOCAL_STORAGE.SESSION_TIMESTAMP,
      )
      const elapsedTime = Date.now() - Number(sessionTimestamp)

      if (!sessionTimestamp || elapsedTime > SESSION_EXPIRATION_TIME) {
        localStorage.removeItem(LOCAL_STORAGE.SESSION_TIMESTAMP)
        router.push('/login/password')
      }
    }
  }, [pathname, router])
  return (
    <html lang="es" {...mantineHtmlProps}>
      <head>
        <title>Mi Aplicación</title>
        <meta charSet={'UTF-8'} />
        <meta
          content={'width=device-width, initial-scale=1.0'}
          name={'viewport'}
        />
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <MantineProvider>{children}</MantineProvider>

          <Toaster position={'top-right'} reverseOrder={false} />
        </Providers>
      </body>
    </html>
  )
}
