import axios from 'axios'
import {useState,useEffect} from 'react'




export default function UserHome() {
  const [users, setusers] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:8000/user/list').then(response =>{
       console.log(response);
       setusers(response.data.usersData)
      })
    }, [])
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 border"}>
        <h2>UserData</h2>
        {users.map(user=> <>
              <div className={"list-group"}>
              <a href="#" class="list-group-item list-group-item-action m-1">
                  <span className={"text-info font-weight-bold"}>{user.username}</span>
              </a>
              </div>
             </>)}
        {/* <Table cols={tableConstants(handleEdit,handleDelete)} data={places} /> */}

         {/* <button onClick={()=>{getPlaces()}}>get places</button> */}
        {/* {places.map(item =>
        <>
          <h2>{item.title}</h2>
        </>
        )}     */}
      </div>
      <div className={"col-md-3"}>
          
      </div>
    </div>
  )
}
