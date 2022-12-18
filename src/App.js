import "./styles/AppTest.css"
import PostItem from "./components/PostItem";
import {useState} from "react";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";

function App() {

    const [posts, setPosts] = useState([
        {id:1, title:"Java", body:"Streams api"},
        {id:2, title:"Java", body:"Streams api"},
        {id:3, title:"Java", body:"Streams api"},
        ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const deletePost = (post) => {
        setPosts([...posts].filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <MyForm create={createPost}/>
            <PostList remove={deletePost} title="Posts" posts={posts}/>
        </div>
    );
}

export default App;
