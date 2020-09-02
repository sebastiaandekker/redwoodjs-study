// Cells are a declarative approach to data fetching and one of Redwood's signature modes of abstraction.
// a Cell is just a higher-order component that executes a GraphQL query and manages its lifecycle.

export const QUERY = gql`
  query BlogPostsQuery {
    blogPosts {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ blogPosts }) => {
  return JSON.stringify(blogPosts)
}
