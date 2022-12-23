import "./styles/AppTest.css"
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";
import MyFilter from "./components/ui/MyFilter";
import MyModal from "./components/ui/modal/MyModal";
import MyButton from "./components/ui/button/MyButton";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "AB", body: "BA"},
        {id: 2, title: "BA", body: "CA"},
        {id: 3, title: "CA", body: "AB"},
    ])

    const [filter, setFilter] = useState({query: "", sort: ""})
    const [modalVisible, setModalVisible] = useState(false)

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
        setModalVisible(false)
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <MyButton onClick={() => setModalVisible(true)}>
                Create post
            </MyButton>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <MyForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <MyFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={deletePost} title="Posts" posts={filteredPosts}/>
        </div>
    );
}

export default App;
