import React from 'react';
import PostItem from "./PostItem";
import {AnimatePresence} from "framer-motion";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
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