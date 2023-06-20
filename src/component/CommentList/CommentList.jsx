import { useSelector } from 'react-redux'
import './CommentList.scss'
import CommentComponent from '../CommentComponent/CommentComponent'

const CommentList = () => {
    const commentsData = useSelector(
        (state) => state.comments.comments.comments
    )

    if (!commentsData) {
        return <p>Loading...</p>
    }

    const comments = commentsData.slice(0, 4)

    return (
        <ul>
            {comments.map((comment) => (
                <CommentComponent key={comment.id} {...comment} />
            ))}
        </ul>
    )
}
export default CommentList
