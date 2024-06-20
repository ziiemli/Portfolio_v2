import {useEffect, useState} from "react"
import axios from "axios"

const Fetch = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        axios
            .get("/data/homeData.json")
            .then((res) => setData(res.data))
            .catch((error) => {
                setError(error)
            })
    }, [])

    return {data, error}
}

export default Fetch
