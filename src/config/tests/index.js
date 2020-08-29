/* eslint-disable react/prop-types */
import React from 'react'
import { render } from '@testing-library/react'
import { UsersProvider } from '../../context/usersContext'

function renderAllTheProviders (
  ui,
  {
    ...renderOptions
  } = {}
) {
  const AllTheProviders = ({ children }) => {
    return (
      <UsersProvider >
        {children}
      </UsersProvider>
    )
  }
  return {
    ...render(ui, { wrapper: AllTheProviders, ...renderOptions }),
    history
  }
}

export * from '@testing-library/react'

export { renderAllTheProviders as render }
