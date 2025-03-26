'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'

import PasswordForm from '@/components/login/password/password-form/password-form'

import HeadingDescription from '@/components/global/heading-description/headingDescription'

export default function PasswordPage() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsername = localStorage.getItem(LOCAL_STORAGE.USERNAME) || ''
      setUsername(storedUsername)
    }
  }, [])

  return (
    <div className={'box-container'}>
      <Image
        alt={'Logo'}
        className={'w-10 h-10 self-start mb-4'}
        height={35}
        src={'/assets/img/google-logo.png'}
        width={35}
      />

      <div className={'grid grid-cols-2 gap-5 w-full'}>
        <HeadingDescription description={''} heading={username || 'Username'} />

        <PasswordForm />
      </div>
    </div>
  )
}
