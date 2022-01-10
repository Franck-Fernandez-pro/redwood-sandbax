import { Link, routes } from '@redwoodjs/router'

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
    <ul>
      {posts.map(({ id, title, body, createdAt }) => (
        <article key={id}>
          <header>
            <h2>
              <Link to={routes.blogPost({ id })}>{title}</Link>
            </h2>
          </header>
          <p>{body}</p>
          <div>Créé le : {createdAt}</div>
        </article>
      ))}
    </ul>
  )
}
