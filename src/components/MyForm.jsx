import React, {useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const MyForm = ({create}) => {

    const [user, setUser] = useState({name: "", age: ""})

    const addNewUser = (event) => {
        event.preventDefault()
        const newUser = {
            ...user
        }
        create(newUser)
        setUser({
            name: "",
            age: ""
        })
    };

    return (
        <form>
            <MyInput
                value={user.name}
                onChange={event => setUser({...user, name: event.target.value})}
                placeholder="name" type="text"
            />
            <MyInput
                value={user.age}
                onChange={event => setUser({...user, age: event.target.value})}
                placeholder="age" type="text"
            />
            <MyButton onClick={addNewUser}>Add user</MyButton>
        </form>
    );
};

export default MyForm;