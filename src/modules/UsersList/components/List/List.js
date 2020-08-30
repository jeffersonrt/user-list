import React from 'react'
import PropTypes from 'prop-types'
import UserItem from '../UserItem'
import * as S from './ListStyles'

function List ({ data }) {
  return (
    <S.List>
      {data.map(user => <UserItem key={user.name + user.age} user={user} />)}
    </S.List>
  )
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default List
