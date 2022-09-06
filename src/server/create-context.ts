import { inferAsyncReturnType } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/adapters/next'

import { prismaClient } from '@lib/prisma'

export async function createContext(opts?: CreateNextContextOptions) {
  return { prismaClient }
}

export type Context = inferAsyncReturnType<typeof createContext>
