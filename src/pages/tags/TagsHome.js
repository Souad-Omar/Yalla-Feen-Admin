import axios from 'axios'
import {useState,useEffect} from 'react'

export default function TagsHome() {
  const [tags, setTags] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/tag/list').then(response =>{
       console.log(response);
       setTags(response.data.data)
      })
    }, [])
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 "}>
        <h2>TagsData</h2>
        {tags.map(tag=> <>
              <div className={"list-group"}>
              <a href="#" class="list-group-item list-group-item-action m-1">
                  <span className={"text-info font-weight-bold"}>{tag.title}</span>
              </a>
              </div>
             </>)}
       
      </div>
      <div className={"col-md-3"}>
          
      </div>
    </div>
  )
}
