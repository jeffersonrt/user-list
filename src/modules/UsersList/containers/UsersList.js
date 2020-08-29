import React, { useEffect, useState } from 'react'
import { fetchUsersList, useUsersDispatch, useUsersState } from '../../../context/usersContext'
import List from '../components/List'
import SearchBar from '../components/SearchBar'

function UsersList () {
  const { list: userList } = useUsersState()
  const userDispatch = useUsersDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch ({ target }) {
    setSearchTerm(target.value)
  }

  useEffect(() => {
    fetchUsersList(userDispatch)
  }, [])

  return (
    <div>
      <SearchBar
        onChange={handleSearch}
        placeholder="Search by name or age"
        value={searchTerm}
      />
      <List data={userList.slice(0, 20)} filter={searchTerm}/>

    </div>
  )
}

export default UsersList
