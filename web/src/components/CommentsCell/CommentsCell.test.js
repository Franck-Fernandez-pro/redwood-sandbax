import { render, screen } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './CommentsCell'
import { standard } from './CommentsCell.mock'

describe('CommentsCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('Empty renders a "no comments" message', () => {
    render(<Empty />)
    expect(screen.getByText('No comments yet')).toBeInTheDocument()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    const COMMENTS = standard().comments
    render(<Success comments={COMMENTS} />)

    COMMENTS.forEach((COMMENT) => {
      expect(screen.getByText(COMMENT.body)).toBeInTheDocument()
    })
  })
})
