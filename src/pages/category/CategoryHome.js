import axios from 'axios'
import {useState,useEffect} from 'react'




export default function CategoryHome() {
  const [categories, setcategories] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:8000/category/list').then(response =>{
       console.log(response);
       setcategories(response.data.data)
      })
    }, [])
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 border"}>
        <h2>CategoryData</h2>
        {categories.map(category=> <>
              <div className={"list-group"}>
              <a href="#" class="list-group-item list-group-item-action m-1">
                  <span className={"text-info font-weight-bold"}>{category.title}</span>
              </a>
              </div>
             </>)}
       
      </div>
      <div className={"col-md-3"}>
          
      </div>
    </div>
  )
}
