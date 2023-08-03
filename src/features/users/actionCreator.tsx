import { createAsyncThunk } from '@reduxjs/toolkit'

import { registerWithEmailAndPassword } from '@/firebase/auth'

import { type User } from './usersSlice'

export const addUser = createAsyncThunk(
  'users/addUser', async (userData: User) => {
    const { id, name, email, password }: User = userData
    const response: number | undefined = await registerWithEmailAndPassword(email, password)

    if (response === 201) { return userData }
    return undefined
  }
)

// export const addCurrentUser = createAsyncThunk(
//   'users/addCurrentUser', async (userData: User) => {
//     console.log(userData)
//   }
// )
