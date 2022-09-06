import React, { ButtonHTMLAttributes } from 'react'

import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SignInButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <button
      className="w-44 h-14 rounded-2xl bg-gray-800 hover:bg-gray-900 flex items-center justify-center gap-4 text-lg text-white font-bold"
      {...rest}
    >
      <ArrowRightOnRectangleIcon className="w-6 h-6 text-white" />
      Github
    </button>
  )
}
