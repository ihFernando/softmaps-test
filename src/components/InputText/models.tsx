import { InputHTMLAttributes } from 'react'

export interface IInputText
  extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  fieldName: string
  placeholder?: string
  isError?: boolean
  errorMessage?: string
  isRequired?: boolean
}
