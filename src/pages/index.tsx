import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'

import { SignInButton } from '@components/sign-in-button'

import { withNoAuth } from '@utils/withNoAuth'
import { signIn } from 'next-auth/react'

const Login: NextPage = () => {
  const handleSignIn = async () => {
    await signIn('github')
  }

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <SignInButton type="button" onClick={handleSignIn} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await withNoAuth(context, () => {
    return {
      props: {}
    }
  })
}

export default Login
