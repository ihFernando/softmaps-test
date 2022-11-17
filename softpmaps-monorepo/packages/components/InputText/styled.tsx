import styled from 'styled-components'

const Input = styled.input<{ isError: boolean }>`
  position: relative;
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  margin: 0.5rem 0;
  color: var(--color-dark-medium);
  border: 1px solid
    ${({ isError }) =>
      isError ? 'var(--color-warning)' : 'rgb(var(--color-light-low))'};
  border-radius: var(--theme-border-radius);
  box-shadow: var(--theme-shadow-light);
  transition: 400ms;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    transition: 600ms;
  }
`

const Error = styled.div`
  position: absolute;
`

export { Input, Error }
