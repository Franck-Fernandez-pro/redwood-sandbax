import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
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

export const Success = ({ comments }) => {
  return (
    <div className="-mt-8">
      {comments.map((comment, idx) => (
        <div key={idx} className="mt-8">
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  )
}
