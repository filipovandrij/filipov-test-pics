import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import './CommentList.scss'
import CommentComponent from '../CommentComponent/CommentComponent'
import { fetchComments } from '../../store/commentSlice'

const CommentList = () => {
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments.comments)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchComments())
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [dispatch])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {comments.map((comment) => (
                <CommentComponent key={comment.id} {...comment} />
            ))}
        </ul>
    )
}
export default CommentList
