import React from 'react'
import { View, Contend } from './styles'
import { IPropsView } from './types'

export const ViewContainer: React.FC<IPropsView> = ({ children, ...props }) => {
  return (
    <View {...props}>
      <Contend>{children}</Contend>
    </View>
  )
}
