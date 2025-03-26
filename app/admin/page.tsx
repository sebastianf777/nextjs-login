import Image from 'next/image'
import HeadingDescription from '@/components/global/heading-description/headingDescription'
import AdminForm from '@/components/admin/admin-form/admin-form'

export default function AdminPage() {
  return (
    <div className={'box-container'}>
      <Image
        alt={'Logo'}
        className={'w-10 h-10 self-start mb-4'}
        height={35}
        src={'/assets/img/google-logo.png'}
        width={35}
      />

      <div className={'grid grid-cols-[auto_1fr] gap-4 mt-4'}>
        <HeadingDescription heading={'Admin Page Vegana'} />
        <AdminForm />
      </div>
    </div>
  )
}
