import { createNextApiHandler } from '@trpc/server/adapters/next'

import { serverRouter } from '@server/router/app.router'
import { createContext } from '@server/create-context'

export default createNextApiHandler({
  router: serverRouter,
  createContext
})
