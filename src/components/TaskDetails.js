import { useState, useEffect } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router'
import Button from './Button'

function TaskDetails() {
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState({})
    const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if (res.status === 404) {
                setError('Task was not found!')
            }

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    })

    if (error) {
        return <Navigate to='/' />
    }

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <Button onClick={() => {
                navigate('/')
            }} text='Go Back' />
        </div>
    )
}

export default TaskDetails
