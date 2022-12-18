import "./styles/AppTest.css"
import {useState} from "react";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";
import MySelect from "./components/ui/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "AB", body: "BA"},
        {id: 2, title: "BA", body: "CA"},
        {id: 3, title: "CA", body: "AB"},
    ])

    const [selectedSort, setSelectedSort] = useState("")

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <MyForm create={createPost}/>
            <MySelect
                defaultOption="Sort by"
                value={selectedSort}
                onChange={sortPosts}
                options={[
                    {value: "title", name: "By title"},
                    {value: "body", name: "By description"}
                ]}
            />
            <PostList remove={deletePost} title="Posts" posts={posts}/>
        </div>
    );
}

export default App;
