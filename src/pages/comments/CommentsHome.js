import axios from 'axios'
import {useState,useEffect} from 'react'
import MaterialCard from '../../components/card/materialCard'
import SectionHeader from '../../components/sectionHeader/sectionHeader'

export default function CommentsHome() {
  const [comments, setComments] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/comment/list').then(response =>{
       console.log(response);
       setComments(response.data.comments)
      })
    }, [])
  return (
    <div className={'row mt-5'}>
    <div className={'col-6 magic'}>
      <SectionHeader
          text="Comments"
          position="center"
      />
    { comments.map((comment,index)=>
      <MaterialCard
          key={index}
          note={comment.name}
          title={comment.text}
          actions={[
          { handler: undefined, type: "Delete" },
          { handler: undefined, type: "Edit" },
        ]}
          
      />)}
    </div>
  </div>
   
  )
}
