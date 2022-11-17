import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints } from '@softmaps/layout/Theme'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: rgba(var(--color-light-high));
  border-radius: var(--theme-border-radius);
  box-shadow: 0 1px 12px 0 rgb(var(--color-light-medium));
  z-index: 9999;
`
const Back = styled(Link)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 1rem;
  width: 4rem;
  height: 2.75rem;
  padding: 0.25rem 0 0 1rem;
  &:before {
    content: '';
    position: absolute;
    top: 1.25rem;
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
    border-top: 1px solid var(--color-dark-medium);
    border-left: 1px solid var(--color-dark-medium);
    -webkit-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-50deg);
  }

  @media ${breakpoints.desktop} {
    top: 0.5rem;
  }
`

export { Header, Back }
