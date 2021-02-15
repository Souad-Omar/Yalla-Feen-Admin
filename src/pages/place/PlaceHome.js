import axios from 'axios'
import {useState,useEffect} from 'react'




export default function PlaceHome() {
  const [places, setplaces] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:8000/place/list').then(response =>{
       console.log(response);
       setplaces(response.data.data)
      })
    }, [])
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 border"}>
        <h2>placeData</h2>
        {places.map(place=> <>
              <div className={"list-group"}>
              <a href="#" class="list-group-item list-group-item-action m-1">
                  <span className={"text-info font-weight-bold"}>{place.title}</span>
              </a>
              </div>
             </>)}
       
      </div>
      <div className={"col-md-3"}>
          
      </div>
    </div>
  )
}
