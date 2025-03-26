import { NavLink } from '@mantine/core'

export default function HomeForm() {
  return (
    <div className={'flex flex-col flex-1'}>
      <div className={'buttons-area'}>
        <NavLink
          unstyled
          label={'Admin'}
          href={'/admin'}
          className={'solid-button'}
          type={'button'}
        />

        <NavLink
          unstyled
          label={'Logout'}
          href={'/logout'}
          className={'solid-button'}
          type={'button'}
        />
      </div>
    </div>
  )
}
