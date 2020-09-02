const BlogLayout = ({ children }) => {
  return (
    <>
      <h1>
        <Link to={routes.home()}>Homepage</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  )
}

export default BlogLayout
