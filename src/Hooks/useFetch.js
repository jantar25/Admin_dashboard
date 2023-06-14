import {useState,useEffect} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [isLoading,setIsLoading] = useState(false)
    const [apiData,setApiData] = useState(null)
    const [serverError,setServerError] = useState(null)

    useEffect(()=> {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                const data = response?.data

                setApiData(data)
                setIsLoading(false)
            } catch (error) {
                setServerError(error)
                setIsLoading(false)
            }
        }
        fetchData()
    },[url])

    return {isLoading,apiData,serverError}
}

export default useFetch