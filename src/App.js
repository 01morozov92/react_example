import "./styles/App.css"
import {useEffect, useMemo, useState} from "react";
import {useFilter} from "./components/hooks/useFilter";
import {useRequest} from "./components/hooks/useRequest";
import {getPagesCount} from "./utils/pagesUtil";
import PostsService from "./api/PostsService";
import MyButton from "./components/ui/button/MyButton";
import MyModal from "./components/ui/modal/MyModal";
import MyForm from "./components/MyForm";
import MyFilter from "./components/ui/MyFilter";
import PostList from "./components/PostList";
import Pagination from "./components/ui/pagination/Pagination";


function Navbar() {
    return null;
}

function App() {

    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({query: "", sort: ""})
    const filteredPosts = useFilter(posts, filter.sort, filter.query)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [loading, postError, getPosts] = useRequest(async () => {
        const resp = await PostsService.getAll(limit, page).then()
        setPosts(resp.data)
        const pagesCount = getPagesCount(resp.headers["x-total-count"], limit)
        setPageTotalCount(pagesCount)
    })
    const [pageTotalCount, setPageTotalCount] = useState(0)

    const pages = useMemo(() => {
        const pagesArr = []
        for (let i = 1; i <= pageTotalCount; i++) {
            pagesArr.push(i)
        }
        return pagesArr
    }, [pageTotalCount])

    useEffect(() => {
        getPosts().then()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Navbar/>
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
                <PostList loading={loading} remove={deletePost} title="Posts" posts={filteredPosts}/>
                <Pagination setPage={setPage} page={page} pages={pages}/>
            </div>
        </div>
    );
}

export default App;
