import styled from 'styled-components'
import { fonts, grid, colors } from '../../../../styles'

export const Container = styled.div`
  padding:${grid.large};
`
export const Message = styled.p`
  font-size: ${fonts.size.medium};
  font-weight: 500;
  text-align: center;
  color: ${colors.textComplementary}
`
