import { Link, routes } from '@redwoodjs/router'

const BlogPostPage = () => {
  return (
    <>
      <h1>BlogPostPage</h1>
      <p>Find me in "./web/src/pages/BlogPostPage/BlogPostPage.js"</p>
      <p>
        My default route is named "blogPost", link to me with `
        <Link to={routes.blogPost()}>BlogPost</Link>`
      </p>
    </>
  )
}

export default BlogPostPage
