import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
const Route = () => {
    const router = useRouter()
    useEffect(() => {
        router.push("/")
    }, [])
    return (
        <div>Route</div>
    )
}

export default Route