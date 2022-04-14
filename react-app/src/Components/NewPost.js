import React, {useState, useEffect} from "react";
import Feed from "./Feed";
import axios from 'axios';
import Post from "./Post";

const NewPost = () => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [post, setPost] = useState();
  const [posts, setPosts] = useState([]);

  const onSubmit = () => {
    console.log({
      id,
      title,
      body
    })
    const newPost = <Post title={title} body={body} postID={id}/>
    const updateArray = [...posts, newPost]
    setPosts(updateArray);
  }


  const postsData = () => {
    axios
      .post('http://localhost:3002/post', {"id":id, "title": title, "body": body}) //THIS IS YOUR URL OF YOUR API
      .then((post) => console.log(post)) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
      .catch((error) => console.log(error)); //ERROR CATCHING IN CASE WE RECEIVE AN ERROR
  };

  useEffect(() => {
    postsData();
  }, []);


  return <div>
    <div>
      <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Body" value={body} onChange={e => setPost(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button>
  </div>
}

export default NewPost;
