'use client'
import { NavLink } from '@mantine/core'

export default function FooterLogin() {
  return (
    <footer
      className={
        'flex justify-between items-center bg-[#202124] p-2 w-full text-[#9aa0a6] text-sm'
      }
    >
      <div
        className={
          'flex items-center gap-2 cursor-pointer hover:text-[#e8eaed]'
        }
      >
        <span>Español (Latinoamérica)</span>
      </div>
      <div className={'flex gap-5'}>
        <NavLink
          className={'footer-links'}
          unstyled
          href={'#'}
          label={'Ayuda'}
        />
        <NavLink
          className={'footer-links'}
          unstyled
          href={'#'}
          label={'Privacidad'}
        />
        <NavLink
          unstyled
          className={'footer-links'}
          href={'#'}
          label={'Condiciones'}
        />
      </div>
    </footer>
  )
}
