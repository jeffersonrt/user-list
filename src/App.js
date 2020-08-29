import React from 'react'
import UsersList from './modules/UsersList/containers'
import { GlobalStyle } from './styles'
import { UsersProvider } from './context/usersContext'
import AppWrapper from './components/AppWrapper'

function App () {
  return (
    <UsersProvider>
      <>
        <GlobalStyle />
        <AppWrapper>
          <UsersList />
        </AppWrapper>
      </>
    </UsersProvider>
  )
}
export default App
