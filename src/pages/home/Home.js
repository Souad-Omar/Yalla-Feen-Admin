import React,{useState} from 'react'
import axios from 'axios'
import  Table from "../../components/Table/index";
import { tableConstants } from "../../components/Table/tableConstant";

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['x-access-token'] =localStorage.getItem('token');
  // console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});



export default function Home() {

    // const data = ['users','places','tags']
    const [places, setplaces] = useState([])
    const handleEdit = (item) => () => {
      // write your logic
     
     
    }
    const handleDelete = (item) => () => {
      // write your logic
      alert("Delete")
      console.log(item);
      console.log(item._id);
      axios.delete(`http://localhost:8000/place/delete/${item._id}`).then(
        res => {
          console.log(res);
          console.log("deleteeeeeeeeeed");
         
          
        }
      ).catch(err => {
        console.log(err);
      });
    }
    const getPlaces = ()=>axios.get("http://localhost:8000/place/list").then(
      res => {
        console.log(res.data.data[0].owner.username)
        setplaces(res.data.data)
        
      }
    )
   
  return (
    <div className={"row"}>
      <div className={"col-md-9 border"}>
        <h2>Places Models</h2>

        <Table cols={tableConstants(handleEdit,handleDelete)} data={places} />

         <button onClick={()=>{getPlaces()}}>get places</button>
        {/* {places.map(item =>
        <>
          <h2>{item.title}</h2>
        </>
        )}     */}
      </div>
      <div className={"col-md-3"}>
            test
      </div>
    </div>
  )
}
