import { NavLink } from '@mantine/core'

export default function AdminForm() {
  return (
    <div className={'flex flex-col flex-1'}>
      <div className={'buttons-area'}>
        <NavLink className={'solid-button'} href={'/'} label={'Home'} />
        <NavLink className={'solid-button'} href={'/logout'} label={'Logout'} />
      </div>
    </div>
  )
}
