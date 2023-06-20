import { configureStore } from '@reduxjs/toolkit'
import commentReducer from './commentSlice'

export default configureStore({
    reducer: {
        comments: commentReducer,
    },
})
