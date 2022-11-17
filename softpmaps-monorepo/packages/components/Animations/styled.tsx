import { keyframes } from 'styled-components'

const slideUpAnimation = keyframes`
  from {
    transform: translateY(1rem);
  }

  to {
    transform: translateY(0rem);
  }
`

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export { slideUpAnimation, fadeInAnimation }
