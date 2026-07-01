import type { ReactNode } from 'react'
import Logo from '../Logo'

const IMAGE_URL =
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative">
      <div className="hidden lg:block lg:absolute top-14.5 left-14.5">
        <Logo className="h-[40px] text-white" />
      </div>
      <div className="min-h-screen lg:flex">
        <div className="hidden lg:block lg:w-2/3 lg:h-screen overflow-hidden">
          <img src={IMAGE_URL} className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/3 flex items-center">
          <div className="w-full px-15 py-20">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 py-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
