'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import HeadingDescription from '@/components/global/heading-description/headingDescription'
import LogoutForm from '@/components/logout/logout-form/logout-form'
import { Loader } from '@mantine/core'

export default function LogoutPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const router = useRouter()

  useEffect(() => {
    ;(async function simulateLogout() {
      try {
        // ERROR SIMULATION

        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     return reject(new Error('Simulated logout error'))
        //   }, 3000)
        // })

        toast.success('Redireccionando.', { id: 'logout-redirect' })
        await new Promise((resolve) => setTimeout(resolve, 3000))
        setLoading(false)
        await new Promise((resolve) => setTimeout(resolve, 3000))
        localStorage.removeItem(LOCAL_STORAGE.USERNAME)
        localStorage.removeItem(LOCAL_STORAGE.SESSION_TIMESTAMP)
      } catch (err: any) {
        console.error('Logout error:', err)
        setError(err)
      }
    })()
  }, [router])

  if (error) throw error

  return (
    <div className={'box-container'}>
      {loading ? (
        <Loader
          color={'blue'}
          type={'bars'}
          size={'lg'}
          className={'mx-auto'}
        />
      ) : (
        <>
          <Image
            alt={'Logo'}
            className={'w-10 h-10 self-start mb-4'}
            height={35}
            src={'/assets/img/google-logo.png'}
            width={35}
          />
          <div className={'grid grid-cols-[auto_1fr] gap-4 mt-4'}>
            <HeadingDescription heading={'Te deslogueaste correctamente'} />
            <LogoutForm />
          </div>
        </>
      )}
    </div>
  )
}
