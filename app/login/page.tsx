import Image from 'next/image'
import HeadingDescription from '@/components/global/heading-description/headingDescription'
import LoginForm from '@/components/login/login-form/login-form'

export default function LoginPage() {
  return (
    <div className={'box-container'}>
      <Image
        alt={'Logo'}
        className={'w-10 h-10 self-start mb-4'}
        height={35}
        src={'/assets/img/google-logo.png'}
        width={35}
      />

      <div className={'grid w-full grid-cols-1 lg:grid-cols-2'}>
        <HeadingDescription
          description={
            'Con tu Cuenta de Google. Esta cuenta estará disponible para otras apps de Google en el navegador.'
          }
          heading={'Acceder'}
        />
        <LoginForm />
      </div>
    </div>
  )
}
