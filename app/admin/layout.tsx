import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className={'layout-admin'}>{children}</div>
}
