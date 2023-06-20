import { useSelector } from 'react-redux'
import './CommentList.scss'

const CommentList = () => {
    const comments = useSelector((state) => state.comments.comments.comments)

    console.log(comments)
    return (
        <ul>
            {comments.map(({ id, body }) => (
                <li key={id}>
                    <p>{id}</p>
                    <p>{body}</p>
                </li>
            ))}
        </ul>
    )
}
export default CommentList
