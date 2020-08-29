import React from 'react'
import { render } from '../../../config/tests'
import UsersList from './UsersList'

describe('UserList', () => {
  test('Should render component without error', () => {
    render(<UsersList />)
  })
})
