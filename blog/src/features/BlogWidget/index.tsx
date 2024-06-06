import Container from '@/components/Container'
import BlogList from './BlogList'
import BlogHeading from './BlogHeading'

const BlogWidget = () => {
  return (
    <Container>
      <BlogHeading />
      <BlogList />
    </Container>
  )
}

export default BlogWidget
