import React, {useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const MyForm = ({create}) => {

    const [post, setPost] = useState({title: "", body: ""})

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
                placeholder="Title" type="text"
            />
            <MyInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                placeholder="Description" type="text"
            />
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
};

export default MyForm;