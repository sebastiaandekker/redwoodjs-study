// posts.sdl (Schema Definition File), this defines the endpoint graphql is going to present
export const schema = gql`
  # defining the Post type
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  # defining 2 queries:
  # posts, which returns all the posts
  # post, which returns 1 post
  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  # defining the CreatePost input type
  input CreatePostInput {
    title: String!
    body: String!
  }

  # defining the Update Post input type
  input UpdatePostInput {
    title: String
    body: String
  }

  # 3 defined CRUD mutations for the database
  type Mutation {
    # these resolvers are defined in ../services/posts/posts.js
    # createPost resolver will take the CreatePostInput and forward it to the database as a create post operation
    createPost(input: CreatePostInput!): Post!
    # updatePost resolver will take the UpdatePostInput along with the id to forward it to the database as a update post operation
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    # deletePost resolver will take the id to forward it to the database as a delete post operation
    deletePost(id: Int!): Post!
  }
`
