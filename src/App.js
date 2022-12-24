import "./styles/AppTest.css"
import {useEffect, useState} from "react";
import UserList from "./components/UserList";
import MyForm from "./components/MyForm";
import MyFilter from "./components/ui/MyFilter";
import MyModal from "./components/ui/modal/MyModal";
import MyButton from "./components/ui/button/MyButton";
import {useUsers} from "./components/hooks/useUsers";
import UserService from "./components/api/UserService";

function App() {

    const [users, setUsers] = useState([])

    const [filter, setFilter] = useState({query: "", sort: ""})
    const [modalVisible, setModalVisible] = useState(false)
    const filteredUsers = useUsers(users, filter.sort, filter.query)

    useEffect(() => {
        UserService.getAllUsers().then(response => setUsers(response.data))
    }, [])

    const createUser = (newUser) => {
        UserService.addUser(newUser).then(response => {
            console.log(response.data)
            setUsers([...users, newUser])
        })
        setModalVisible(false)
    };

    const deleteUser = (user) => {
        UserService.deleteUser(user.id).then(response => {
            console.log(response.data)
            setUsers(users.filter(p => p.id !== user.id))
        })

    };

    return (
        <div className="App">
            {/*<MyButton onClick={fetchUsers}>GET USERS</MyButton>*/}
            <MyButton style={{marginTop: "10px"}} onClick={() => setModalVisible(true)}>
                Create user
            </MyButton>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <MyForm create={createUser}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <MyFilter filter={filter} setFilter={setFilter}/>
            <UserList remove={deleteUser} name="Users" users={filteredUsers}/>
        </div>
    );
}

export default App;
