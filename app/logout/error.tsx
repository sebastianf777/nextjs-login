'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
}: {
  error: unknown
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error('Logout error:', error)

    const redirectTimer = setTimeout(() => {
      router.push('/login/password')
    }, 3000)

    return () => clearTimeout(redirectTimer)
  }, [error, router])

  const errorMessage =
    error instanceof Error ? (error as Error).message : String(error)

  return (
    <div
      className={
        'bg-red-100 border border-red-400 text-red-700 p-4 rounded-md max-w-md mx-auto mt-8'
      }
      role={'alert'}
      aria-live={'polite'}
    >
      <h2 className={'text-sm font-semibold'}>Error al cerrar sesión</h2>
      <p className={'mt-1 text-sm'}>
        {errorMessage || 'Ocurrió un problema desconocido al cerrar sesión.'}.
        Redireccionando al login en 3 segundos...
      </p>
    </div>
  )
}
