import './AddForm.scss'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../store/commentSlice'

const AddForm = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const savedText = localStorage.getItem('taskText')
        if (savedText) {
            setBody(savedText)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('taskText', body)
    }, [body])

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleAddComment = (e) => {
        e.preventDefault()

        if (username.trim() === '' || body.trim() === '') {
            setError('Please fill in all fields')
            return
        }

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
        setError('')
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
            {error && <div className="error_message">{error}</div>}
        </form>
    )
}

export default AddForm
