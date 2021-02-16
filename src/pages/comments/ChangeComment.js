import axios from 'axios';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export default function ChangeComment() {
  const [comment, setComment] = useState({})
  const [commentNotFound, setCommentNotFound] = useState(false)
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/comment/details/${id}`).then(response =>{
      // console.log(response.data);
      if(response.status===200){
        setCommentNotFound(false)
        setComment(response.data)
      }else{
          setCommentNotFound(true)
      }
    })
  }, [])
  return (
    <>
    {comment?<div>
      {comment.title}
      </div>
    :
    <h2>comment not found</h2>
      }
  </>
  )
}
