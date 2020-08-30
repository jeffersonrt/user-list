/* eslint-disable react/prop-types */
import React from 'react'
import { render } from '@testing-library/react'
import { UsersProvider } from '../../context/usersContext'

const AllTheProviders = ({ children }) => {
  return (
    <UsersProvider >
      {children}
    </UsersProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
