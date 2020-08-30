import styled from 'styled-components'
import { fonts, grid, colors } from '../../../../styles'

export const Row = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-bottom: 1px solid ${colors.divider};
  padding: ${grid.small} 0;
`

export const Column = styled.p`
  color: ${colors.textMain};
  font-size: ${fonts.size.regular};

  &:last-child {
    text-align: right;
    padding: 0 ${grid.small};
  }

`
