import React from 'react'
import PropTypes from 'prop-types'
import * as S from './UserItemStyles'

function UserItem ({ user }) {
  return (
    <S.Row>
      <S.Column>
        {user.name}
      </S.Column>
      <S.Column>
        {user.age}
      </S.Column>
    </S.Row>
  )
}

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })
}

export default UserItem
