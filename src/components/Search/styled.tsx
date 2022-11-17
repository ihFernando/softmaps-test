import styled from 'styled-components'

const Cover = styled.div<{ show: boolean }>`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--color-light-medium), 0.8);
  backdrop-filter: blur(0.125rem);
  z-index: 100;
  transition: 400ms;
  will-change: visibility;
`

const WrapInput = styled.div`
  position: relative;
  max-width: 24rem;
  z-index: 101;
  margin: 0 auto;
`

const ResultsContent = styled.div<{ show: boolean }>`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: absolute;
  width: 100%;
  background-color: rgba(var(--color-light-high), 0.8);
  padding: 1rem;
  border: 1px solid rgb(var(--color-light-low));
  border-radius: var(--theme-border-radius);
  box-shadow: var(--theme-shadow-light);
  z-index: 102;
  transition: 400ms;
  will-change: visibility;
`

const Row = styled.li`
  width: 100%;
  margin-bottom: 0.5rem;
`

const SubmitButton = styled.div`
  position: absolute;
  width: 5rem;
  height: 2.5rem;
  right: 0.25rem;
  bottom: 1.25rem;
`

export { Cover, WrapInput, ResultsContent, Row, SubmitButton }
