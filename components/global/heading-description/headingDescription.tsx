'use client'
import { Avatar, Button } from '@mantine/core'
import { useRouter, usePathname } from 'next/navigation'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'
type HeadingDescriptionProps = {
  heading: string
  description?: string
}

export default function HeadingDescription({
  heading,
  description,
}: HeadingDescriptionProps) {
  const router = useRouter()
  const pathname = usePathname()
  const isPasswordPage = pathname === '/login/password'
  const changeUser = () => {
    localStorage.removeItem(LOCAL_STORAGE.USERNAME)
    router.push('/login')
  }

  return (
    <div className={'flex flex-col flex-1 mr-10'}>
      {isPasswordPage ? (
        <Button
          classNames={{
            inner: 'justify-start',
          }}
          onClick={changeUser}
          className={
            'border-0 rounded-3xl bg-[#A8C7FA] hover:bg-[#A8C7FA] text-[#062E6F] hover:text-[#062E6F] cursor-pointer transition-colors duration-300 ease-in-out hover:opacity-70'
          }
        >
          <Avatar radius="xl" size="sm" color="blue" />
          <span className="text-[18px] ml-2">{heading}</span>{' '}
        </Button>
      ) : (
        <>
          <h1 className="text-[38px]">{heading}</h1>
          {description && (
            <p className="text-sm text-[#9aa0a6] mb-[30px] mt-0 leading-[1.5]">
              {description}
            </p>
          )}
        </>
      )}
    </div>
  )
}
