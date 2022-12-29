import React, {useState} from 'react';
import MyButton from "./ui/button/MyButton";
import MyTextArea from "./ui/text_area/MyTextArea";

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
            <MyTextArea
                style={{resize: "vertical"}}
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                placeholder="Title" type="text"
            />
            <MyTextArea
                style={{resize: "vertical"}}
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                placeholder="Description" type="text"
            />
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
};

export default MyForm;