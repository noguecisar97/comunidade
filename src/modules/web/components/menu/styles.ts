import styled from 'styled-components'
import { ButtonCustom } from 'components/button'
import { IProps } from './types'

export const ContainerPrincipal = styled.div<IProps>`
  margin: 0;
  padding: 10px 0 5px 0;
  border-bottom: solid 1px ${(props) => props.theme.colors.primary};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
      margin: 0;
      margin-left: 1rem;
      padding: 0;
      background: transparent;
      outline: 0;
      border: none;
      box-shadow: none;
      margin-right: 1rem;
      -webkit-tap-highlight-color: transparent;

      svg {
        cursor: pointer;
        width: 30px;
        height: 30px;
        color: ${(props) => props.theme.colors.primary};

        :hover {
          color: ${(props) => props.theme.colors.secondary};
          transform: scale(1.2);
        }
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 15px;
    width: 100%;

    li {
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.3rem;

      cursor: pointer;

      :hover {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }

  @media (min-width: 800px) {
    padding: 25px 0 0 0;
    border-right: solid 1px ${(props) => props.theme.colors.primary};
    border-bottom: none;
    display: flex;
    flex-direction: column;
    max-width: 15rem;
    min-width: 10rem;
    width: 100%;

    div {
      .btn {
        display: none;
      }
    }

    ul {
      list-style: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
      gap: 0;
      padding: 0;
      border-bottom: none;

      li {
        color: ${(props) => props.theme.colors.primary};
        font-size: 1.5rem;
        padding: 1.2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        width: 100%;

        :hover {
          color: ${(props) => props.theme.colors.secondary};
        }

        :first-child {
          margin-top: 3rem;
        }
      }
    }
  }
`

export const CustomButton = styled(ButtonCustom)`
  margin: 0;
  padding: 0;
  background: transparent;
  outline: 0;
  color: ${(props) => props.theme.colors.primary};
`

export const CustomNav = styled.nav<IProps>`
  display: ${(props) => (props.display ? props.display : 'none')};

  @media (min-width: 800px) {
    display: ${(props) => (props.display ? 'flex' : 'flex')};
  }
`
