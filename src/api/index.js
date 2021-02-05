import { useState, useEffect } from 'react'
import axios from 'axios'

const URI = 'https://lucifer-13een.herokuapp.com/post'

export const posttoapi = (data) => {
    axios
        .post(URI, data)
        .then(() => {
            alert('Info uploaded')
        })
        .catch((error) => alert(error.message))
        .then(() => {
            location.reload()
        })
}

export function useFetch() {
    //setting states
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const getData = () => {
        axios
            .get(URI)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error.message))
            .then((_) => setLoading(false))
    }
    //Fetch on component mount
    useEffect(() => {
        getData()
    }, [URI])
    //returning an array
    return [data, loading]
}

export const updatePost = (id, updatePost) =>
    axios
        .patch(`${url}/${id}`, updatePost)
        .then(alert('post has been updated'))
        .catch(alert("Post couldn't update due internal error"))
        .then(location.reload())
