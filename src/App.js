import "./styles/App.css"
import {useEffect, useState} from "react";
import PostList from "./components/ui/list/PostList";
import MyForm from "./components/ui/MyForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/ui/modal/MyModal";
import MyButton from "./components/ui/button/MyButton";
import {usePosts} from "./hooks/UsePosts";
import PostService from "./api/PostService";
import classes from "./components/ui/list/PostList.module.css";
import MyLoader from "./components/ui/loader/MyLoader";
import {useFetching} from "./hooks/UseFetching";
import {getPageCount, getPagesArray} from "./utils/pages";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit))
    })

    let pagesArray = getPagesArray(totalPages)

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    };

    const removePost = (outPost) => {
        setPosts(posts.filter(post => post.id !== outPost.id))
    };

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: "10px"}} onClick={() => setModal(true)}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <MyForm create={createNewPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
                <h1>An error has occurred: {postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}><MyLoader/></div>
                : <PostList remove={removePost} posts={searchedAndSortedPosts} title="Posts"/>}
            <div className="page__wrapper">
                {pagesArray.map(pageNumber =>
                    <span
                        onClick={() => changePage(pageNumber)}
                        key={pageNumber}
                        className={page === pageNumber ? "page page__current" : "page"}
                    >
                        {pageNumber}
                    </span>
                )}
            </div>
        </div>
    );
}

export default App;
