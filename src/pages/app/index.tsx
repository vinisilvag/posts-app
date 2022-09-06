import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { Session } from 'next-auth'

import { withAuth } from '@utils/withAuth'

import { Header } from '@components/header'
import { PostList } from '@components/post-list'
const App: NextPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />

      <PostList />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await withAuth(context, (session: Session) => {
    return {
      props: { session }
    }
  })
}

export default App
