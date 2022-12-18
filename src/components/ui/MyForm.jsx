import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const MyForm = ({create}) => {

    const [post, setPost] = useState({title: "", body: ""})//id

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({
            title: "",
            body: ""
        })
    };

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                type="text" placeholder="Post's title"/>
            <MyInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                type="text" placeholder="Post's description"/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default MyForm;