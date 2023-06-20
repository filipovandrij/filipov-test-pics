import './CommentComponent.scss'
import { useDispatch } from 'react-redux'
import { deleteComment } from '../../store/commentSlice'

const CommentComponent = ({ id, body, user }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteComment(id))
    }

    const names = user.username.split(' ')
    let initials = ''

    names.forEach((name) => {
        initials += name.charAt(0).toUpperCase()
    })

    return (
        <li className="container_comment">
            <p>{body}</p>
            <div className="user_name">
                {user.username}
                <div className="logo_name">{initials}</div>
            </div>
            <button className="delete" onClick={handleDelete}>
                X
            </button>
        </li>
    )
}
export default CommentComponent
