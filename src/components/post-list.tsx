import React from 'react'
import { trpc } from '@lib/trpc'

export const PostList: React.FC = () => {
  const { data, isLoading, error } = trpc.useQuery(['posts.findAllPosts'])

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  if (error) {
    return <h1>Erro ao carregar os posts.</h1>
  }

  return (
    <main className="max-w-screen-sm mx-auto flex flex-row gap-2">
      <h1>{JSON.stringify(data)}</h1>
    </main>
  )
}
