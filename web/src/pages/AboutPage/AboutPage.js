// Redwood has aliases so you don't need ./ or ../ before the import source. Neither do you need to specify the filename inside the directory, because they are the same and taken care of by Redwood.
import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <>
      <BlogLayout>This is the About page !</BlogLayout>
    </>
  )
}

export default AboutPage
