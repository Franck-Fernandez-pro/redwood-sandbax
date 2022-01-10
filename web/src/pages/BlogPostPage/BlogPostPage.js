import { MetaTags } from '@redwoodjs/web'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <>
      <MetaTags title="BlogPost" description="BlogPost page" />

      <BlogPostCell id={id} />
    </>
  )
}

export default BlogPostPage
