import React from 'react'
import PropTypes from 'prop-types'
import * as S from './AppWrapperStyles'

function AppWrapper ({ children }) {
  return (
    <S.Page>
      <S.Container>{children}</S.Container>
    </S.Page>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.element
}

export default AppWrapper
