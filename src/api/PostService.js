import axios from "axios";

export default class PostService{
    static getAll = async (limit = 10, page = 1) => {
          return await axios.get("https://jsonplaceholder.typicode.com/posts", {
              params: {
                  _limit: limit,
                  _page: page
              }
          })
    }
}