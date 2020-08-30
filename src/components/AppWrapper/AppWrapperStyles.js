import styled from 'styled-components'
import { colors, grid } from '../../styles'

export const Page = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  background: ${colors.background};
`
export const Container = styled.div`
  width: 50vw;
  padding:${grid.small} ${grid.medium};
  margin: ${grid.large} 0;
  background: ${colors.baseWhite};
  border-radius: ${grid.radius};
  box-shadow: 3px 4px 17px -2px ${colors.surface};
`
