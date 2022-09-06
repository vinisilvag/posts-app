import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  title,
  isLoading = false,
  ...rest
}) => {
  return (
    <button
      className="w-44 h-14 rounded-2xl bg-gray-800 hover:bg-gray-900 flex items-center justify-center gap-4 text-lg text-white font-bold"
      {...rest}
    >
      {isLoading ? 'Carregando...' : title}
    </button>
  )
}
