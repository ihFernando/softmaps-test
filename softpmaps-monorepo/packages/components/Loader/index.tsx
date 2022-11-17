import React from 'react'

import { Loader as StyledLoader } from './styled'

const Loader: React.FC = () => {
  return (
    <StyledLoader>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3rem"
        height="3rem"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          fill="var(--color-dark-low)"
          d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
          stroke="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 51;360 50 51"
          ></animateTransform>
        </path>
      </svg>
    </StyledLoader>
  )
}

export default Loader
