import styled from 'styled-components'

const Overlay = styled.div`
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);

`

export default Overlay;