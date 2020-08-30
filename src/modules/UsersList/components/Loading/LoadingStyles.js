import styled from 'styled-components'
import { ReactComponent as Loader } from '../../../../assets/loader.svg'
import { grid, colors } from '../../../../styles'

export const Container = styled.div`
  padding:${grid.medium};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  font-weight: 500;
  color: ${colors.textComplementary};
`

export const LoaderIcon = styled(Loader)`
  width: 30px;
  height: auto;
  margin: 0 ${grid.medium};
`
