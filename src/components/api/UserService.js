import axios from "axios";

export default class UserService {
    static async getAllUsers() {
        return await axios.get("http://localhost:8080/users")
    }

    static async deleteUser(id) {
        return await axios.delete(`http://localhost:8080/users/${id}`)
    }

    static async addUser(user) {
        return await axios.post(`http://localhost:8080/users`, user)
    }
}