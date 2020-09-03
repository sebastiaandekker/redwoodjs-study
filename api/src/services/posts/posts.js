// defines the services (resolvers) for the posts.sdl (Schema Definition file)
// as long as the name of the resolvers is the same in both files,  Redwood will
// automatically go in the posts service and find that resolver definition so you don't have to write it manually
import { db } from 'src/lib/db'

export const posts = () => {
  // inside these functions we can put prisma code
  // call findMany method upon the post object inside the database to find all posts
  return db.post.findMany()
}

export const post = ({ id }) => {
  // find one post by id
  return db.post.findOne({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  // create post with the input data as the actual data
  return db.post.create({
    data: input,
  })
}

export const updatePost = ({ id, input }) => {
  // update post with specified id and the input data as the actual data
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  // delete post with specified id
  return db.post.delete({
    where: { id },
  })
}
