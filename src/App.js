import "./styles/App.css"
import {useEffect, useState} from "react";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";
import MyFilter from "./components/ui/MyFilter";
import MyModal from "./components/ui/modal/MyModal";
import MyButton from "./components/ui/button/MyButton";
import {useFilter} from "./components/hooks/useFilter";
import PostService from "./api/PostsService";
import Loader from "./components/ui/loader/Loader";
import Loader2 from "./components/ui/loader/Loader2";
import {useRequest} from "./components/hooks/useRequest";
import PostsService from "./api/PostsService";

function App() {

    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({query: "", sort: ""})
    const filteredPosts = useFilter(posts, filter.sort, filter.query)
    const [loading, postError, getPosts] = useRequest(async () => {
        const posts = await PostsService.getAll().then(response => response.data)
        setPosts(posts)
    })

    useEffect(async () => {
        await getPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <MyButton style={{marginTop: 15}} onClick={() => setModal(true)}>Add post</MyButton>
            <MyModal
                isActive={modal}
                setActive={setModal}>
                <MyForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <MyFilter filter={filter} setFilter={setFilter}/>
            {
                postError &&
                <h1>Error! ${postError}</h1>
            }
            {loading ? <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Loader2/>
                </div>
                : <PostList remove={deletePost} title="Posts" posts={filteredPosts}/>
            }
        </div>
    );
}

export default App;
