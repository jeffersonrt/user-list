import React, { useEffect, useState } from 'react'
import { fetchUsersList, useUsersDispatch, useUsersState } from '../../../context/usersContext'
import List from '../components/List'
import SearchBar from '../components/SearchBar'
import NotFound from '../components/NotFound'
import Loading from '../components/Loading'

function UsersList () {
  const { list: userList, error, isLoading } = useUsersState()
  const userDispatch = useUsersDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  function handleInputChange ({ target }) {
    setSearchTerm(target.value)
  }

  function handleFilterByTerm ({ name, age }, term) {
    return name.toLowerCase().includes(term.toLowerCase()) || age.toString().includes(term)
  }

  function filterUsers (list, filter) {
    return list.filter(user => handleFilterByTerm(user, filter))
  }

  function renderBodyList () {
    if (isLoading) {
      return <Loading />
    }

    const users = filterUsers(userList, searchTerm)
    const message = !users.length && searchTerm ? `Not found - ${searchTerm}` : error

    return error || !users.length
      ? <NotFound message={message} />
      : <List data={users} filter={searchTerm}/>
  }

  useEffect(() => {
    fetchUsersList(userDispatch)
  }, [userDispatch])

  return (
    <>
      <SearchBar
        onChange={handleInputChange}
        placeholder="Filter by name or age"
        value={searchTerm}
      />
      {renderBodyList()}
    </>
  )
}

export default UsersList
