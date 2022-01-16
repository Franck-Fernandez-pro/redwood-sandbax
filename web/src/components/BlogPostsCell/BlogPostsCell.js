import BlogPost from '../BlogPost/BlogPost'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <div className="space-y-10">
      {posts.map((post, idx) => (
        <BlogPost key={idx} post={post} />
      ))}
    </div>
  )
}
