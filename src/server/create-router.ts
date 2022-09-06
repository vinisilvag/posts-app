import * as trpc from '@trpc/server'

import { Context } from '@server/create-context'

export const createRouter = () => {
  return trpc.router<Context>()
}
