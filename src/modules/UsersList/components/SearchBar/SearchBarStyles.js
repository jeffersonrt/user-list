import styled from 'styled-components'
import { fonts, grid, colors } from '../../../../styles'

export const Container = styled.div`
  padding: ${grid.regular} 0;
`

export const SearchInput = styled.input`
  outline: none;
  min-width: 100%;
  padding: ${grid.small};
  border: none;
  font-size: ${fonts.regular};
  border-bottom: 1px solid ${colors.divider};
  transition: all .3s ease-in-out;

  &:focus {
    border-color: ${colors.main}; 
  }
`
