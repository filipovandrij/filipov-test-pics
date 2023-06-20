import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://dummyjson.com/comments')
            if (!response.ok) {
                throw new Error('Server Error!')
            }
            const data = await response.json()

            return data.comments
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async function (commentId, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(
                `https://dummyjson.com/comments/${commentId}`,
                {
                    method: 'DELETE',
                }
            )
            if (!response.ok) {
                throw new Error('Server Error!')
            }
            return commentId
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addCommentAsync = createAsyncThunk(
    'comments/addComment',
    async function (commentData, { rejectWithValue }) {
        try {
            const response = await fetch('https://dummyjson.com/comments/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(commentData),
            })

            if (!response.ok) {
                throw new Error('Server Error!')
            }

            const data = await response.json()
            return data.comment
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comments: [],
        status: null,
        error: null,
    },
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload
        })
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.comments = state.comments.filter(
                (comment) => comment.id !== action.payload
            )
        })
        builder.addCase(addCommentAsync.fulfilled, (state, action) => {
            state.comments.push(action.payload)
        })
    },
})

export const { addComment } = commentSlice.actions

export default commentSlice.reducer
