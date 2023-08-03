import React, { type FC } from 'react'

import { useAppSelector } from '@/app/hooks'

import { userSelector } from '@/features/users/usersSlice'

const Home: FC = () => {
  const users = useAppSelector(userSelector)
  console.log(users)
  return (
    <div>Home</div>
  )
}

export default Home
