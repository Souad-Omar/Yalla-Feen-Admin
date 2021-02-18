import axios from 'axios'
import {useState,useEffect} from 'react'
import MaterialCard from '../../components/card/materialCard'
import SectionHeader from '../../components/sectionHeader/sectionHeader'





export default function CategoryHome() {
  const [categories, setcategories] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/category/list').then(response =>{
       console.log(response);
       setcategories(response.data.data)
      })
    }, [])
  return (
    <div className={'row mt-5'}>
      <div className={'col-6 magic'}>
        <SectionHeader
            text="Categories"
            position="center"
        />
      { categories.map((category,index)=>
        <MaterialCard
            key={index}
            note={category.places.length}
            title={category.title}
            actions={[
            { handler: undefined, type: "Delete" },
            { handler: undefined, type: "Edit" },
          ]}
            
        />)}
      </div>
    </div>
  )
}
