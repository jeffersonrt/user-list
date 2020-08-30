import React from 'react'
import PropTypes from 'prop-types'
import UserItem from '../UserItem'

export const searchFilter = ({ name, age }, term) => {
  return name.toLowerCase().includes(term.toLowerCase()) || age.toString().includes(term)
}

function List ({ data, filter }) {
  return data
    .filter(user => searchFilter(user, filter))
    .map(user => <UserItem key={user.name + user.age} user={user} />)
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string
}

export default List
