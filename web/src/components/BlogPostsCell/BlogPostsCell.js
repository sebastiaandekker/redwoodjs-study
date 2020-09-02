// Cells are a declarative approach to data fetching and one of Redwood's signature modes of abstraction.
// a Cell is just a higher-order component that executes a GraphQL query and manages its lifecycle.

// gql query to get the data
export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
    }
  }
`

// renders when the data is loading
export const Loading = () => <div>Loading...</div>

// renders this if the data is empty (empty array or null)
export const Empty = () => <div>Empty</div>

// renders if there is an error on the back-end
export const Failure = ({ error }) => <div>Error: {error.message}</div>

// renders if everything loaded correctly
export const Success = ({ blogPosts }) => {
  return JSON.stringify(blogPosts)
}
