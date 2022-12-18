import "./styles/AppTest.css"
import {useState} from "react";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";
import MySelect from "./components/ui/select/MySelect";
import MyInput from "./components/ui/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "AB", body: "BA"},
        {id: 2, title: "BA", body: "CA"},
        {id: 3, title: "CA", body: "AB"},
    ])

    const [selectedSort, setSelectedSort] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    const getSortedPosts = () => {
        console.log("KEK!")
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }

    const sortedPosts = getSortedPosts()

    const sortPosts = (sort) => {
        setSelectedSort(sort)
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
            <hr style={{margin: "15px 0"}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search posts"
                />
                <MySelect
                    defaultOption="Sort by"
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                        {value: "title", name: "By title"},
                        {value: "body", name: "By description"}
                    ]}
                />
            </div>
            <PostList remove={deletePost} title="Posts" posts={sortedPosts}/>
        </div>
    );
}

export default App;
