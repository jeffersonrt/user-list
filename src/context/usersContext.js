import React from 'react'
import PropTypes from 'prop-types'
import { UsersAPI } from '../services/UsersAPI'
import { requestResponse } from '../utils'

const UsersStateContext = React.createContext()
const UsersDispatchContext = React.createContext()

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  error: ''
}

const TYPES = {
  request: 'users/REQUEST',
  success: 'users/SUCCESS',
  failure: 'users/FAILURE'
}

function userReducer (state, action) {
  switch (action.type) {
    case TYPES.request: {
      return { ...state, isLoading: true }
    }
    case TYPES.success: {
      return { ...state, list: action.payload.data, isLoading: false }
    }
    case TYPES.failure: {
      return { ...state, error: action.payload.error, isLoading: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function UsersProvider ({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, INITIAL_STATE)
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  )
}

function useUsersState () {
  const context = React.useContext(UsersStateContext)
  if (context === undefined) {
    throw new Error('useUsersState must be used within a UsersProvider')
  }
  return context
}

function useUsersDispatch () {
  const context = React.useContext(UsersDispatchContext)
  if (context === undefined) {
    throw new Error('useUsersDispatch must be used within a UsersProvider')
  }
  return context
}

async function fetchUsersList (dispatch) {
  dispatch({ type: TYPES.request })
  try {
    const { data } = await UsersAPI.getUsers()
    dispatch({ type: TYPES.success, payload: requestResponse(data) })
  } catch (error) {
    dispatch({ type: TYPES.failure, payload: requestResponse(error.response, error.response.data) })
  }
}

UsersProvider.propTypes = {
  children: PropTypes.element
}

export { UsersProvider, useUsersState, useUsersDispatch, fetchUsersList }
