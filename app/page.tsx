import Image from 'next/image'
import HeadingDescription from '@/components/global/heading-description/headingDescription'
import HomeForm from '@/components/home/home-form/home-form'

export default function Home() {
  return (
    <div className={'layout-home'}>
      <div className={'box-container'}>
        <Image
          alt={'Logo'}
          className={'w-10 h-10 self-start mb-4'}
          height={35}
          src={'/assets/img/google-logo.png'}
          width={35}
        />

        <div className={'grid grid-cols-[7fr_7fr] gap-5 w-full'}>
          <HeadingDescription
            description={'Bienvenido a esta pagina'}
            heading={'Home'}
          />
          <HomeForm />
        </div>
      </div>
    </div>
  )
}
