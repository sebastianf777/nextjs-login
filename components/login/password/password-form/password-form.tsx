'use client'

import { useRouter } from 'next/navigation'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'
import { FormEvent, useState } from 'react'

import UserInput from '@/components/user-input/user-input'
import { Button, Alert, NavLink } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'

export default function PasswordForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [error, setError] = useState('')
  const icon = <IconInfoCircle />

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    const username = localStorage.getItem(LOCAL_STORAGE.USERNAME)
    setLoading(true)
    try {
      const response = await fetch(
        'https://nodejs-server-lemon.vercel.app/api/check-auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password: passwordValue }),
        },
      )

      const data = await response.json()
      if (data.token) {
        localStorage.setItem(
          LOCAL_STORAGE.SESSION_TIMESTAMP,
          Date.now().toString(),
        )
        router.push('/admin')
      } else {
        setError('Contraseña incorrecta')
        setTimeout(() => setError(''), 1000)
      }
    } catch (error) {
      console.error('Error durante la autenticación:', error)
      setError('Error conectando al servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error ? (
          <Alert
            className={'text-[#062E6F] bg-[#A8C7FA]'}
            variant={'default'}
            color={'#A8C7FA'}
            icon={icon}
          >
            {error}
          </Alert>
        ) : (
          <UserInput
            label={'Ingresa tu contraseña'}
            inputType={'password'}
            onChange={(e) => setPasswordValue(e.target.value)}
            loading={loading}
          />
        )}

        <div className={'buttons-area'}>
          <NavLink
            className={'transparent-button'}
            href={'/login/forgot'}
            label={'¿Olvidaste la contraseña?'}
            disabled={loading}
          />
          <Button
            unstyled
            className={'solid-button'}
            variant="default"
            type={'submit'}
            disabled={loading}
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  )
}
