import React from 'react';
import {AnimatePresence, motion} from "framer-motion"

const PostItem = ({post, number, remove}) => {

    return (
            <motion.div
                key="modal"
                initial={{y: "50%", opacity: 0, scale: 0.5}}
                animate={{y: 0, opacity: 1, scale: 1}}
                transition={{duration: 0.9, ease: "easeOut"}}
                exit={{y: "50%", opacity: 0, transition: {duration: 0.3}}}
                layout className="post">
                <motion.div className="post__content">
                    <motion.strong>{number}. {post.title}</motion.strong>
                    <motion.div className="post-text">{post.body}</motion.div>
                </motion.div>
                <motion.button onClick={() => remove(post)}>Delete</motion.button>
            </motion.div>
    );
};

export default PostItem;