import { useDispatch } from 'react-redux'
import Main from './container/Main'
import { useEffect } from 'react'
import { fetchComments } from './store/commentSlice'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    return (
        <div className="App">
            <Main></Main>
        </div>
    )
}

export default App
