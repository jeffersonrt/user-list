import React, { useEffect, useState } from 'react'
import { fetchUsersList, useUsersDispatch, useUsersState } from '../../../context/usersContext'
import List from '../components/List'
import SearchBar from '../components/SearchBar'

function UsersList () {
  const { list: userList, error } = useUsersState()
  const userDispatch = useUsersDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch ({ target }) {
    setSearchTerm(target.value)
  }

  useEffect(() => {
    fetchUsersList(userDispatch)
  }, [userDispatch])

  return (
    <div>
      <SearchBar
        onChange={handleSearch}
        placeholder="Filter by name or age"
        value={searchTerm}
      />
      {error
        ? <div>{error}</div>
        : <List data={userList} filter={searchTerm}/>
      }

    </div>
  )
}

export default UsersList
