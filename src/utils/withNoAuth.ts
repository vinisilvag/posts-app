import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export const withNoAuth = async (
  context: GetServerSidePropsContext,
  callback: any
) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }

  return callback()
}
