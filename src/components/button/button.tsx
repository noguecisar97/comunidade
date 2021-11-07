import React from 'react'
import { Button } from './styles'
import { IProps } from './types'

import { FaArrowLeft } from 'react-icons/fa'

export const ButtonCustom: React.FC<IProps> = ({
  text,
  children,
  icon,
  onClick,
  showIcon = true,
  ...props
}): JSX.Element => {
  return (
    <Button onClick={onClick} {...props}>
      {showIcon ? icon ?? <FaArrowLeft /> : ''}
      {text ?? children}
    </Button>
  )
}
