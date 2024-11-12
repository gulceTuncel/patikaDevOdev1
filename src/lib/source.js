import axios from "axios";

export default async function getData(userId){
try
   { const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        
    return {
        ...userResponse.data,
        posts: postsResponse.data
    }}
    catch(error){
        throw new Error("Data fetching error" + error.message);

    }
}
