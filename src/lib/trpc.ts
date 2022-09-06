import { createReactQueryHooks } from '@trpc/react'
import type { ServerRouter } from '@server/router/app.router'

export const trpc = createReactQueryHooks<ServerRouter>()
