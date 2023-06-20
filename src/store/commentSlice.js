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
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comments: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.comments = action.payload
        },
        [fetchComments.rejected]: setError,
    },
})

export default commentSlice.reducer
