import "./styles/AppTest.css"
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";
import MyFilter from "./components/ui/MyFilter";
import MyModal from "./components/ui/modal/MyModal";
import MyButton from "./components/ui/button/MyButton";

function App() {

    const [users, setUsers] = useState([
        {id: 1, name: "AB", age: "BA"},
        {id: 2, name: "BA", age: "CA"},
        {id: 3, name: "CA", age: "AB"},
    ])

    const [filter, setFilter] = useState({query: "", sort: ""})
    const [modalVisible, setModalVisible] = useState(false)

    const sortedUsers = useMemo(() => {
        console.log("KEK!")
        if (filter.sort) {
            return [...users].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return users
    }, [users, filter.sort])

    const filteredUsers = useMemo(() => {
        return sortedUsers.filter(post => post.name.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedUsers])

    const createUser = (newPost) => {
        setUsers([...users, newPost])
        setModalVisible(false)
    };

    const deleteUser = (user) => {
        setUsers(users.filter(p => p.id !== user.id))
    };

    return (
        <div className="App">
            <MyButton onClick={() => setModalVisible(true)}>
                Create user
            </MyButton>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <MyForm create={createUser}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <MyFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={deleteUser} name="Users" users={filteredUsers}/>
        </div>
    );
}

export default App;
