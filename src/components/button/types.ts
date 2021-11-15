import { ReactSVGElement, MouseEventHandler, CSSProperties } from 'react'

export interface IProps {
  text?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: ReactSVGElement
  showIcon?: boolean
  color?: string
  style?: CSSProperties
  hover?: boolean
  variant?: string
}

export interface IButtonProps {
  color?: string
  hover?: boolean
  variant?: string
}
