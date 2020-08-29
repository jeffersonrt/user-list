import React from 'react'
import UsersList from './modules/UsersList/containers'
import { GlobalStyle } from './styles'
import { UsersProvider } from './context/usersContext'

function App () {
  return (
    <UsersProvider>
      <>
        <GlobalStyle />
        <UsersList />
      </>
    </UsersProvider>
  )
}
export default App
