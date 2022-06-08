import { ReactSVGElement, MouseEventHandler, CSSProperties, ReactNode } from 'react'

export interface IProps {
  text?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: ReactSVGElement
  showIcon?: boolean
  color?: string
  style?: CSSProperties
  hover?: boolean
  variant?: string
  children?: ReactNode
}

export interface IButtonProps {
  color?: string
  hover?: boolean
  variant?: string
}
