import {useState,useEffect} from 'react'
import axios from 'axios'
import  Table from "../../components/Table/index";
import { tableConstants } from "../../components/Table/tableConstant";
import { Link } from 'react-router-dom';

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
    const getPlaces = ()=>axios.get("http://localhost:8000/place/need-approve").then(
      res => {
        console.log(res.data.data[0].owner.username)
        setplaces(res.data.data)
        
      }
    )
    const models = ['Users','Categories','Places','Advertises','Messages','Comments']
    useEffect(async () => {
      axios.get("http://localhost:8000/place/need-approve").then(response => {
        console.log(response.data.data);
        setplaces(response.data.data)
      })
      
    }, [])
   
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 border"}>
        <h2>Models</h2>
        {models.map(model=> <>
              <div className={"list-group"}>
                <a  className={"list-group-item list-group-item-action m-1"}>
                      <Link to={model}>
                        <span className={"text-info font-weight-bold"}> {model} </span>
                      </Link>
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
            {places.map(place=> <>
              <div className={"border m-1"}>
                  {place.title}
              </div>
             </>)}
      </div>
    </div>
  )
}
