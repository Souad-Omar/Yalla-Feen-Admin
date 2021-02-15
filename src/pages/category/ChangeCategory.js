import axios from 'axios';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export default function Changecategory() {
  const [category, setcategory] = useState({})
  const [categoryNotFound, setcategoryNotFound] = useState(false)
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/category/details/${id}`).then(response =>{
      console.log(response);
      if(response.status===200){
        setcategoryNotFound(false)
        setcategory(response.data.category)
      }else{
          setcategoryNotFound(true)
      }
    })
  }, [])
  return (
    <>
    {category?<div>
      {category.title}
      </div>
    :
    <h2>category not found</h2>
      }
  </>
  )
}
