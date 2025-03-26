'use client'

import { Button, Alert, Loader } from '@mantine/core'
import { FormEvent, useState } from 'react'
import { IconInfoCircle } from '@tabler/icons-react'
import { useRouter, useSearchParams } from 'next/navigation'
import UserInput from '@/components/user-input/user-input'

export default function ForgotForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/login/password'

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (success) {
      router.push(redirect)
    } else if (!loading) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setSuccess(true)
      }, 3000)
    }
  }
  const icon = <IconInfoCircle />

  return (
    <div className={'flex flex-col flex-1'}>
      <form onSubmit={handleSubmit}>
        {success ? (
          <Alert
            className={'text-[#062E6F] bg-[#A8C7FA]'}
            variant={'default'}
            color={'#A8C7FA'}
            icon={icon}
          >
            Un correo electrónico ha sido enviado para resetear tu password
          </Alert>
        ) : loading ? (
          <Loader color={'blue'} type={'bars'} className={'mx-auto'} />
        ) : (
          <UserInput label={'Correo electrónico'} inputType={'email'} />
        )}

        <div className={'buttons-area'}>
          <Button
            className={'solid-button'}
            type={'submit'}
            unstyled
            disabled={loading}
          >
            {loading || success ? 'Atrás' : 'Siguiente'}
          </Button>
        </div>
      </form>
    </div>
  )
}
