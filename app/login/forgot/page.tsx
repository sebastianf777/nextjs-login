import Image from 'next/image'
import HeadingDescription from '@/components/global/heading-description/headingDescription'
import ForgotForm from '@/components/login/forgot/forgot-form/forgot-form'

export default function ForgotPage() {
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
        <HeadingDescription
          description={
            'Ingresa tu número de teléfono o correo de recuperación.'
          }
          heading={'Buscar tu correo electrónico'}
        />
        <ForgotForm />
      </div>
    </div>
  )
}
