import {useState} from "react";
import axios from 'axios';

const NewComment = (postId) => {
  const [comment, setComment] = useState();
  const [comments, setComments]  = useState([]);

  const onSubmit = () => {
    const data = {
      "newComment": comment
    }

    const updateArray = [...comments, comment]

    setComments(updateArray);

    axios.post(`http://localhost:3002/post/${postId['postId']}/comment`, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
  <>
   <div style={{ textAlign: 'left', marginBottom: '12px'}}>
      {
        comments?.map(c =>
          <p>{c}</p>
        )
      }
      
    </div>
    <div>
      <div>
        <input type="text" placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
      </div>
      <button style={{ marginTop: '4px'}} onClick={onSubmit}>
        Submit
      </button>
    </div>
  </>
  )
}

export default NewComment;