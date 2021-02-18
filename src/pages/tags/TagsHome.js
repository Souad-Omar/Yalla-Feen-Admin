import axios from 'axios'
import {useState,useEffect} from 'react'
import MaterialCard from '../../components/card/materialCard'
import SectionHeader from '../../components/sectionHeader/sectionHeader'

export default function TagsHome() {
  const [tags, setTags] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/tag/list').then(response =>{
       console.log(response);
       setTags(response.data.data)
      })
    }, [])
  return (
    <div className={'row mt-5'}>
    <div className={'col-6 magic'}>
      <SectionHeader
          text="Tags"
          position="center"
      />
    { tags.map((tag,index)=>
      <MaterialCard
          key={index}
          note={tag.places.length}
          title={tag.title}
          actions={[
          { handler: undefined, type: "Delete" },
          { handler: undefined, type: "Edit" },
        ]}
          
      />)}
    </div>
  </div>
  )
}
