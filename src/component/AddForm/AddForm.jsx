import './AddForm.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../store/commentSlice'

const AddForm = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [body, setBody] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleAddComment = (e) => {
        e.preventDefault()

        const commentId = Date.now()

        const newComment = {
            id: commentId,
            body,
            user: {
                username,
            },
        }

        dispatch(addComment(newComment))

        setUsername('')
        setBody('')
    }

    return (
        <form className="form_container" onSubmit={handleAddComment}>
            <div className="inner_form_container">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <textarea
                    name="body"
                    cols="30"
                    rows="10"
                    placeholder="Comment"
                    value={body}
                    onChange={handleBodyChange}
                ></textarea>
                <button className="add_button" type="submit">
                    Send
                </button>
            </div>
        </form>
    )
}

export default AddForm
