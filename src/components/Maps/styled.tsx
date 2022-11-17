import styled from 'styled-components'
import { slideUpAnimation } from '@softmaps/components/Animations'

const MapWrap = styled.div`
  width: 100%;
  height: 27rem;
  padding: 0;
  margin: 1rem 0;
  border-radius: 0.25rem;
  box-shadow: var(--theme-shadow-light);
  overflow: hidden;
  animation: ${slideUpAnimation} 600ms forwards;
`

const Map = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  & > canvas {
    width: 100% !important;
    height: 100% !important;
  }
`

export { MapWrap, Map }
