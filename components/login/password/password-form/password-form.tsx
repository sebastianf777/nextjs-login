'use client'

import { useRouter } from 'next/navigation'
import { LOCAL_STORAGE } from '@/utils/utils.constants'
import { FormEvent, useState } from 'react'
import { authenticateUser } from '@/utils/utils.api'
import { ERRORS } from '@/utils/utils.messages'

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
    if (!username || !passwordValue) {
      setError(ERRORS.MISSING_CREDENTIALS)
      return
    }

    setLoading(true)
    try {
      const data = await authenticateUser(username, passwordValue)

      if (data.token) {
        localStorage.setItem(
          LOCAL_STORAGE.SESSION_TIMESTAMP,
          Date.now().toString(),
        )
        router.push('/admin')
      } else {
        setError(ERRORS.INCORRECT_PASSWORD)
      }
    } catch (err) {
      console.error('Auth error:', err)
      setError(ERRORS.SERVER_ERROR)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserInput
          label={'Ingresa tu contraseña'}
          inputType={'password'}
          onChange={(e) => {
            setPasswordValue(e.target.value)
            if (error) setError('')
          }}
          loading={loading}
        />
        {error && (
          <Alert
            className="text-[#062E6F] bg-[#A8C7FA] mt-5"
            variant="default"
            color="#A8C7FA"
            icon={icon}
          >
            {error}
          </Alert>
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
