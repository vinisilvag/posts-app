import { createRouter } from '@server/create-router'
import { z } from 'zod'

export const postRouter = createRouter()
  .query('findAllPosts', {
    resolve: async ({ ctx: { prismaClient } }) => {
      const posts = await prismaClient.post.findMany()

      return posts
    }
  })
  .mutation('createPost', {
    input: z.object({
      content: z.string()
    }),
    resolve: async ({ input, ctx: { prismaClient } }) => {
      const { content } = input

      const newPost = await prismaClient.post.create({ data: { content } })

      return newPost
    }
  })
