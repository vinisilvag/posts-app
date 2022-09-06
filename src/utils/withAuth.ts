import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export const withAuth = async (
  context: GetServerSidePropsContext,
  callback: any
) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return callback(session)
}
