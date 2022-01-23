import Comment from './Comment'

const COMMENT = {
  name: 'Rob Cameron',
  body: 'This is a comment!',
  createdAt: '2020-01-01T12:34:56Z',
}

export const defaultView = () => {
  return <Comment comment={COMMENT} />
}

export const moderatorView = () => {
  mockCurrentUser({
    roles: ['moderator'],
  })
  return (
    <div className="m-4">
      <Comment comment={COMMENT} />
    </div>
  )
}

export default { title: 'Components/Comment' }
