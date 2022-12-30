import React from 'react';
import PostItem from "./PostItem";
import {AnimatePresence} from "framer-motion";
import Loader2 from "./ui/loader/Loader2";

const PostList = ({loading, posts, title, remove}) => {

    if (loading) {
        return (
            <div className="post-container">
                <Loader2/>
            </div>
        )

    } else if (!posts.length) {
        return <h1 style={{textAlign: "center"}}>Posts not found!</h1>
    }

    return (
        <div className="post-container">
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <AnimatePresence>
                {posts.map((post, index) =>
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PostList;