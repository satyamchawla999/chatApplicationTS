import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type RootState } from '../../app/store'
import { addUser } from './actionCreator'

export interface User {
  id: string
  name: string
  email: string
  password: string
}

export interface initialStateData {
  users: User[]
  currentUser: User
}

const initialState: initialStateData = {
  users: [],
  currentUser: {
    id: '',
    name: '',
    email: '',
    password: ''
  }
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // addUser: (state, action: PayloadAction<User>) => {
    //   state.users.push(action.payload)
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled,
      (state, { payload }) => {
        const data: User | undefined = payload

        if (data !== undefined) {
          state.users.push(data)
        }
      })
  }
})

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions
export const userSelector = (state: RootState) => state.persistedReducer.userReducer.users
export default userSlice.reducer
