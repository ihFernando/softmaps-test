import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 2rem);
  margin: 1rem 0;
`

const Image = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const SelectFile = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--color-light-high), 0.5);
  border-radius: var(--theme-border-radius);
  box-shadow: var(--theme-shadow-dark);
  z-index: 0;
`

export { Wrap, Image, SelectFile }
