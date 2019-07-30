import React, { useState, useEffect } from "react"
import ReactMarkdown from 'react-markdown'

import "../static/style/blog.css"

import HelloWorld07302019 from "./blogposts/HelloWorld07302019.md"

const Blog = () => {
    const [postList, setPostList] = useState([])

    const postFiles = [
        HelloWorld07302019,
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