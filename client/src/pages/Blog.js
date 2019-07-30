import React, { useState, useEffect } from "react"
import ReactMarkdown from 'react-markdown'

import "../static/style/blog.css"
import TestPost from "../pages/blogposts/test.md"
import TestPost2 from "../pages/blogposts/test2.md"
import TestPost3 from "../pages/blogposts/test3.md"

const Blog = () => {
    const [postList, setPostList] = useState([])

    const postFiles = [
        TestPost,
        TestPost2,
        TestPost3
    ]

    useEffect(() => {
        const promiseArray = postFiles.map((file) => {
            return fetch(file)
                .then(response => {
                    return response.text()
                })
        })
        Promise.all(promiseArray)
            .then(values => {
                const markdownObj = values.map((markdownText, i) => {
                    return {
                        markdown: markdownText,
                        id: i
                    }
                })
                setPostList(markdownObj)
            })
    }, [postFiles])

    const mapPosts = postList.map((post, i) => {
        return <ReactMarkdown source={post.markdown} key={i} />
    })

    return (
        <main className="blog-container page-container">
            {mapPosts}
        </main>
    )

}
    
export default Blog