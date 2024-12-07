import React, { useEffect, useState } from 'react';
import "./blog.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import AboutImg from "../../assets/about.jpg"


const Blog = () => {
    const [postList, setPostList] = useState([]); // State to hold fetched posts
    const [showFullContent, setShowFullContent] = useState({}); // To toggle full content for each post

    const postCollectionRef = collection(db, "blogs");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);
    return (
        <div className='home'>
            <img src={AboutImg} />
            <div className="post__container grid">
                {postList.map((post) => {
                    const wordLimit = 30; // Adjust this as needed
                    const previewContent = post.text
                        ? post.text.split(" ").slice(0, wordLimit).join(" ")
                        : "No content available.";
                    return (
                        <div>
                            <div className='postInfo'>
                                <span className="postTitle">
                                    <div className="post__title">
                                        {post.title}
                                    </div>
                                </span>
                                <hr />
                                {/* <span className="postDate">{post.createdAt}</span> */}
                            </div>
                            <p className="postDesc">
                                {showFullContent[post.id] ? post.text : `${previewContent}...`}
                            </p>
                            <button
                                onClick={() => setShowFullContent((prev) => ({
                                    ...prev,
                                    [post.id]: !prev[post.id], // Toggle content only for this post
                                }))}
                                style={{
                                    marginTop: "10px",
                                    padding: "10px 20px",
                                    background: "#fff", // Matches the yellow-gold accents from your theme
                                    color: "#000", // Contrasts well for readability
                                    border: "none",
                                    borderRadius: "20px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease",
                                }}
                            >
                                {showFullContent[post.id] ? "Show Less" : "Read More"}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog