import React from 'react'
import { View, Contend } from './styles'

export const ViewContainer: React.FC = ({ children, ...props }) => {
  return (
    <View {...props}>
      <Contend>{children}</Contend>
    </View>
  )
}
