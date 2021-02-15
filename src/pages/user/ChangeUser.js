import axios from 'axios';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export default function ChangeUser() {
  const [user, setuser] = useState({})
  const [userNotFound, setuserNotFound] = useState(false)
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/user/details/${id}`).then(response =>{
      // console.log(response.status);
      if(response.status===200){
        setuserNotFound(false)
        setuser(response.data.user)
      }else{
          setuserNotFound(true)
      }
    })
  }, [])
  return (
    <>
    {user?<div>
      {user.username}
      </div>
    :
    <h2>User not found</h2>
      }
  </>
  )
}
