import React,{useState, useEffect} from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import axios from 'axios';

const Feed = () => {

  const [post, setPost] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const onSubmit = () => {
    console.log({
      id,
      title,
      body
    })
    const newPost = {"id": id, "body": body, "title": title}
    const updateArray = [...post, newPost]
    setPost(updateArray);
  }

  const getPostsData = () => {
    axios
      .get('http://localhost:3002/posts') //THIS IS YOUR URL OF YOUR API
      .then((post) => setPost(post.data)) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
      .catch((error) => console.log(error)); //ERROR CATCHING IN CASE WE RECEIVE AN ERROR
  };

  useEffect(() => {
    getPostsData();
  }, []);
  
  return (
    <>
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
            {
        post?.map(post=>
          <Post title={post.title} body={post.body} postId={post.id}/>
        )
      }
    </div>
    <div>
    <div>
      <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button>
  </div>
  </>
  )

}


export default Feed;
