/* eslint-disable prefer-promise-reject-errors */
import React from 'react'
import { render, screen, act } from '../../../config/tests/test-utils'
import userEvent from '@testing-library/user-event'
import UsersList from './UsersList'
import { UsersAPI } from '../../../services/UsersAPI'
import '@testing-library/jest-dom/extend-expect'

const mockUsers = () => ({
  data: {
    message: 'success',
    status: true,
    data: [
      {
        name: 'Jackalmire',
        age: 30
      }, {
        name: 'Pegasusnorth',
        age: 83
      }, {
        name: 'Leadershore',
        age: 25
      }
    ]
  }

})

const makeSut = () => {
  const { getByText, debug, container } = render(<UsersList />)
  return {
    getByText,
    container,
    debug
  }
}

describe('UserList', () => {
  test('Should render component without error', async () => {
    await act(async () => {
      makeSut()
    })
    expect(screen.getByPlaceholderText(/filter by name or age/i)).toBeInTheDocument()
  })

  test('Should call UsersAPI on component did mount', async () => {
    const getUsersSpy = jest.spyOn(UsersAPI, 'getUsers')
    await act(async () => {
      makeSut()
    })
    expect(getUsersSpy).toHaveBeenCalled()
  })

  test('Should call have a list of users', async () => {
    jest.spyOn(UsersAPI, 'getUsers').mockReturnValueOnce(mockUsers())

    await act(async () => {
      makeSut()
    })

    const firstUser = screen.getByText(/Jackalmire/i)
    expect(firstUser).toBeInTheDocument()
  })

  test('Should show an error if request fail', async () => {
    jest.spyOn(UsersAPI, 'getUsers')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject({
        response: {
          data: 'Not Found'
        }
      })))

    await act(async () => {
      makeSut()
    })
    const errorMessage = screen.getByText(/not found/i)
    expect(errorMessage).toBeInTheDocument()
  })

  test('Should find user on type their age on filter input', async () => {
    jest.spyOn(UsersAPI, 'getUsers').mockReturnValueOnce(mockUsers())
    await act(async () => {
      makeSut()
    })

    const filterInput = screen.getByPlaceholderText(/filter by name or age/i)

    userEvent.type(filterInput, '30')
    expect(filterInput).toHaveValue('30')

    const filteredUser = screen.queryByText(/Jackalmire/i)
    expect(filteredUser).toBeInTheDocument()

    const otherUser = screen.queryByText(/Pegasusnorth/i)
    expect(otherUser).not.toBeInTheDocument()
  })

  test('Should find user on type their name on filter input', async () => {
    jest.spyOn(UsersAPI, 'getUsers').mockReturnValueOnce(mockUsers())
    await act(async () => {
      makeSut()
    })

    const filterInput = screen.getByPlaceholderText(/filter by name or age/i)

    userEvent.type(filterInput, 'jack')
    expect(filterInput).toHaveValue('jack')

    const filteredUser = screen.queryByText(/Jackalmire/i)
    expect(filteredUser).toBeInTheDocument()

    const otherUser = screen.queryByText(/Pegasusnorth/i)
    expect(otherUser).not.toBeInTheDocument()
  })
})
