import axios from "axios";

export default class PostsService {
    static async getAll() {
        return await axios.get("https://jsonplaceholder.typicode.com/posts")
    }
}