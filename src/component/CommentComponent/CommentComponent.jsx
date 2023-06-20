import './CommentComponent.scss'

const CommentComponent = ({ body, user }) => {
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
            <button className="delete">X</button>
        </li>
    )
}
export default CommentComponent
