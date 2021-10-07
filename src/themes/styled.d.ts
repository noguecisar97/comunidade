import 'styled-components'
import { themeProps } from './types'

declare module 'styled-components' {
  export interface DefaultTheme extends themeProps {
    name: 'comunidade'
  }
}
