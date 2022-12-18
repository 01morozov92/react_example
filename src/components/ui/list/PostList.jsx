import React from 'react';
import PostItem from "../../PostItem";
import classes from "./PostList.module.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>Posts not found</h1>
        )
    }

    return (
        <div>
            <div className={classes.postList}>
                <h1 style={{textAlign: "center"}}>
                    {title}
                </h1>
            </div>
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;