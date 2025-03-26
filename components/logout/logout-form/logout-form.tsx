'use client'

import { NavLink } from '@mantine/core'

export default function LogoutForm() {
  return (
    <div className={'flex flex-col flex-1'}>
      <div className={'buttons-area'}>
        <NavLink className={'solid-button'} href={'/login'} label={'Login'} />
      </div>
    </div>
  )
}
