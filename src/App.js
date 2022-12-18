import "./styles/App.css"
import {useState} from "react";
import PostList from "./components/PostList";
import MyForm from "./components/ui/MyForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "Java", body: "Streams api"},
        {id: 2, title: "Java", body: "Streams api"},
        {id: 3, title: "Java", body: "Streams api"}
    ])


    const createPost = (newPost) => {
        console.log(posts)
        setPosts([...posts, newPost])
    };

    return (
        <div className="App">
            <MyForm create={createPost}/>
            <PostList posts={posts}/>
        </div>
    );
}

export default App;
