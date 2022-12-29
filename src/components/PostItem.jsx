import React from 'react';
import {AnimatePresence, motion} from "framer-motion"
import MyButton from "./ui/button/MyButton";

const PostItem = ({post, number, remove}) => {

    return (
            <motion.div
                key="post"
                initial={{y: "50%", opacity: 0, scale: 0.5}}
                animate={{y: 0, opacity: 1, scale: 1}}
                transition={{duration: 0.9, ease: "easeOut"}}
                exit={{y: "50%", opacity: 0, transition: {duration: 0.3}}}
                className="post">
                <div className="post__content">
                    <strong className="post-text">{number}. {post.title}</strong>
                    <div className="post-text">{post.body}</div>
                </div>
                <MyButton onClick={() => remove(post)}>Delete</MyButton>
            </motion.div>
    );
};

export default PostItem;