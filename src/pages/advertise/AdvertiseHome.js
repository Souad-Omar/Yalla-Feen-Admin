import axios from 'axios'
import {useState,useEffect} from 'react'

export default function AdvertiseHome() {
  const [advertises, setAdvertises] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/advertise/list').then(response =>{
       console.log(response);
       setAdvertises(response.data.ads)
      })
    }, [])
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 border"}>
        <h2>AdvertiseData</h2>
        {advertises.map(advertise=> <>
              <div className={"list-group"}>
              <a href="#" class="list-group-item list-group-item-action m-1">
                  <span className={"text-info font-weight-bold"}>{advertise.title}</span>
              </a>
              </div>
             </>)}
       
      </div>
      <div className={"col-md-3"}>
          
      </div>
    </div>
  )
}
