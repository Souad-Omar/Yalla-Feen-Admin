import axios from 'axios';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export default function Changeplace() {
  const [place, setplace] = useState({})
  const [placeNotFound, setplaceNotFound] = useState(false)
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/place/details/${id}`).then(response =>{
      // console.log(response.data);
      if(response.status===200){
        setplaceNotFound(false)
        setplace(response.data)
      }else{
          setplaceNotFound(true)
      }
    })
  }, [])
  return (
    <>
    {place?<div>
      {place.title}
      <br/>
      {place.description}
      </div>
    :
    <h2>place not found</h2>
      }
  </>
  )
}
