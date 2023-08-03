/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { auth } from './firebaseConfig'

// import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

interface user {
  _tokenResponse: object
}

const registerWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const res: unknown = await createUserWithEmailAndPassword(auth, email, password)
    const response = res as user
    if (response._tokenResponse) {
      return 201
    }
  } catch (err) {
    console.log(err)
  }
}

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const res: unknown = await signInWithEmailAndPassword(auth, email, password)
    const response = res as user
    if (response._tokenResponse) {
      return 201
    }
  } catch (err) {
    console.error(err)
  }
}

export {
  registerWithEmailAndPassword,
  logInWithEmailAndPassword
}
