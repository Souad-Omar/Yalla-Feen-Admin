import React,{useState} from 'react'
import axios from 'axios'


axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMWM3NmJlMzBkZjQ4MTk1NDRmYTU1MiIsInVzZXJuYW1lIjoibXVzdGFmYTIiLCJleHAiOjE2MTc5MDQ1ODQsImlhdCI6MTYxMjcyMDU4NH0.ML1qyH8Y5iAYU7v9J4H0xvtUl9HLM0Xqk2_fqASrPMs';
  // console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});



export default function Home() {
    const [places, setplaces] = useState([])
    
    const getPlaces = ()=>axios.get("http://localhost:8000/user/list").then(
      res => {
        console.log(res.data.usersData)
        setplaces(res.data.usersData)
        
      }
    )
  return (
    <div className={"row"}>
      <div className={"col-md-9 border"}>
        <h2>Admin Models</h2>
        <button onClick={()=>{getPlaces()}}>get places</button>
        {places.map(item =>
        <>
          <h2>{item.username}</h2>
        </>
        )}   
      </div>
      <div className={"col-md-3"}>
            test
      </div>
    </div>
  )
}
