import '../../styles/login.styles.scss'
import { ReactNode } from 'react'
import FooterLogin from '@/components/login/footer-login/footer-login'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className={'layout-login'}>
      {children}
      <FooterLogin />
    </div>
  )
}
