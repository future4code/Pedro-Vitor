import React from "react"
import {useProtectedPage} from "../../hooks/useProtectedPage"
import {useParams} from "react-router-dom"
import useRequestData from "../../hooks/useRequestedData"
import {BASE_URL} from "../../constants/urls";

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const post = useRequestData({}, `${BASE_URL}/posts/${params.id}`)

    console.log(post)

    return (
        <div>
            <h1> To do</h1>
        </div>
    )
}

export default PostPage
