import styled from 'styled-components'
import { IButtonProps } from './types'

export const Button = styled.button<IButtonProps>`
  width: 10rem;

  display: flex;
  gap: 1rem;
  justify-content: center;

  border: none;
  border-radius: 0.5rem;

  padding: 0.5rem;
  margin: 1rem;

  font-size: 1.2rem;
  font-weight: bold;

  letter-spacing: 0.1rem;
  text-transform: capitalize;

  color: ${(props) => props.color ?? props.theme.colors.fifth};
  background-color: ${(props) => props.theme.colors.third};

  cursor: pointer;

  &:hover {
    color: ${(props) => (props.hover ? props.theme.colors.secondary : '')};
    border: none;
  }
`
