import { ReactNode } from 'react'

import '../../styles/logout.styles.scss'

export default function LogoutLayout({ children }: { children: ReactNode }) {
  return <div className={'layout-logout'}>{children}</div>
}
