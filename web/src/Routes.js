// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  // /blog-posts/{id:Int} says there is going to be another part to this url /blog-posts/
  // Redwood will put this value after /blog-posts/ in a variable id
  // changes it's value into a Int datatype with a helper function called RouteParamTypes
  // and makes it available to any Page that it renders
  return (
    <Router>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Private unauthenticated="home">
        <Route path="/posts/new" page={NewPostPage} name="newPost" />
        <Route
          path="/posts/{id:Int}/edit"
          page={EditPostPage}
          name="editPost"
        />
        <Route path="/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/posts" page={PostsPage} name="posts" />
      </Private>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
