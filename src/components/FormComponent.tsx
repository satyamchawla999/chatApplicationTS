/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FC, type FormEvent, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { addUser } from '@/features/users/actionCreator'

import { useAppDispatch } from '../app/hooks'
import { logInWithEmailAndPassword } from '../firebase/auth'
interface data {
  page?: string
}

const FormComponent: FC<data> = (props) => {
  const { page } = props
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault()

    const name: string = nameRef.current!.value
    const email: string = emailRef.current!.value
    const password: string = passwordRef.current!.value

    const id: string = '1'
    void dispatch(addUser({ id, name, email, password }))

    // if (response === 201) {
    //   dispatch(addUser({ id, name, email }))
    //   // void dispatch(addCurrentUser({ id, name, email }))
    //   navigate('/signin')
    // }
  }

  const handleSignin = async (e: FormEvent) => {
    e.preventDefault()
    const email = emailRef.current!.value
    const password = passwordRef.current!.value
    const response: number | undefined = await logInWithEmailAndPassword(email, password)
    if (response === 201) {
      navigate('/')
    }
  }

  return (
        <div className="formSection">

            <h1>{page}</h1>

            <form className="inputForm">

                {page === 'Sign up' && <input type="name" name="name" placeholder='Name' ref={nameRef} required />}
                <input type="email" name="email" placeholder='Email' ref={emailRef} required />
                <input type="password" name="password" placeholder='Password' ref={passwordRef} required />
                {page === 'Sign up' && <input type="password" name="confirmPassword" placeholder='Confirm Password' ref={confirmPasswordRef} required />}

                {/* // eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <button onClick={page === 'Sign up' ? handleSignup : handleSignin}>
                    {page}
                </button>

            </form>

            {page === 'Sign in'
              ? <>
                <p>New user? <Link className="link" to="/signup" >Sign up</Link></p>
            </>
              : <>
                <p>Already have an account? <Link className="link" to="/signin" >Sign in</Link></p>
            </>}

        </div>
  )
}

export default FormComponent
