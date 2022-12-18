import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const MyForm = ({create}) => {

    const [post, setPost] = useState({title: "", body: ""})

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: "", body: ""})
    }

    return (
        <form>
            <div>
                <MyInput
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                    testid="title_input" type="text" placeholder="Title..."></MyInput>
                <MyInput
                    value={post.body}
                    onChange={event => setPost({...post, body: event.target.value})}
                    testid="desc_input" type="text" placeholder="Description..."></MyInput>
                <MyButton onClick={addNewPost} testid="add_post_btn">Add post</MyButton>
            </div>
        </form>
    );
};

export default MyForm;