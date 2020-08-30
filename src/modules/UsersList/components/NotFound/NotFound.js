import React from 'react'
import PropTypes from 'prop-types'
import * as S from './NotFoundStyles'

function NotFound ({ message }) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}

NotFound.propTypes = {
  message: PropTypes.string
}

export default NotFound
