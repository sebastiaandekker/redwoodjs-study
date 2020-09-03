import BlogPostCell from 'src/components/BlogPostCell'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

// there is an id prop passed through this by Routes.js
const BlogPostPage = ({ id }) => {
  // console.log('id', id)
  // Redwood provides a helper that passes on any paramater and makes it available for the query inside the Cell
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
