import axios from 'axios'
import {useState,useEffect} from 'react'

export default function CommentsHome() {
  const [comments, setComments] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/comment/list').then(response =>{
       console.log(response);
       setComments(response.data.comments)
      })
    }, [])
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 border"}>
        <h2>CommentsData</h2>
        {comments.map(comment=> <>
              <div className={"list-group"}>
              <a href="#" class="list-group-item list-group-item-action m-1">
                  <span className={"text-info font-weight-bold"}>{comment.text}</span>
              </a>
              </div>
             </>)}
       
      </div>
      <div className={"col-md-3"}>
          
      </div>
    </div>
  )
}
