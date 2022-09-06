import React, {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'

import type { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, id, ...rest },
  ref
) => {
  return (
    <div className="w-full flex items-start flex-col">
      <input
        className={'w-full h-12 px-3 bg-input rounded-lg'}
        ref={ref}
        id={id}
        {...rest}
      />

      {!!error && (
        <span className="text-sm text-primary mt-1 ml-16">{error.message}</span>
      )}
    </div>
  )
}

export const Input = forwardRef(InputBase)
