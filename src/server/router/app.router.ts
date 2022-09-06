import { createRouter } from '@server/create-router'
import { postRouter } from './post.router'

export const serverRouter = createRouter().merge('posts.', postRouter)

export type ServerRouter = typeof serverRouter
