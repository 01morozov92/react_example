import "./styles/AppTest.css"
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";
import MySelect from "./components/ui/select/MySelect";
import MyInput from "./components/ui/input/MyInput";
import MyFilter from "./components/ui/MyFilter";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "AB", body: "BA"},
        {id: 2, title: "BA", body: "CA"},
        {id: 3, title: "CA", body: "AB"},
    ])

    const [filter, setFilter] = useState({query: "", sort: ""})

    const sortedPosts = useMemo(() => {
        console.log("KEK!")
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [posts, filter.sort])

    const filteredPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <MyForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <MyFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={deletePost} title="Posts" posts={filteredPosts}/>
        </div>
    );
}

export default App;
