import {useState,useEffect} from 'react'
import axios from 'axios'
import  Table from "../../components/Table/index";
import { tableConstants } from "../../components/Table/tableConstant";
import { Link } from 'react-router-dom';
import Card from '../../components/controlles/Card';
import MaterialCard from '../../components/card/materialCard';

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
    // const handleEdit = (item) => () => {
    //   // write your logic
     
     
    // }
    // const handleDelete = (item) => () => {
    //   // write your logic
    //   alert("Delete")
    //   console.log(item);
    //   console.log(item._id);
    //   axios.delete(`http://localhost:3000/place/delete/${item._id}`).then(
    //     res => {
    //       console.log(res);
    //       console.log("deleteeeeeeeeeed");
         
          
    //     }
    //   ).catch(err => {
    //     console.log(err);
    //   });
    // const getPlaces = ()=>axios.get("http://localhost:3000/place/need-approve").then(
    //   res => {
    //     console.log(res.data.data[0].owner.username)
    //     setplaces(res.data.data)
        
    //   }
    // )
    const models = ['Users','Categories','Places','Advertises','Messages','Comments','Tags']
    useEffect(async () => {
      axios.get("http://localhost:3000/place/need-approve").then(response => {
        // console.log(response.data.data);
        setplaces(response.data.data)
      })
      
    }, [])
   

    const deletePlace = (index, id)=>(e)=>{
      alert('are you sure you want delete this place')
      axios.delete(`http://localhost:3000/place/delete/${id}`).then(
            res => {
              setplaces (places.filter((item,j)=> index !== j))
              console.log(res);
              console.log("deleteeeeeeeeeed");

            }
          ).catch(err => {
            console.log(err);
          });
    }

    const approve = (index,id)=>(e)=>{
      axios.post(`http://localhost:3000/place/approve/${id}`).then(res=>{
          if(res.status==200){
            setplaces (places.filter((item,j)=> index !== j));
          }
      }).catch(err => { console.log(err);});
      
      
      console.log('approve clicked ');
    }
    // const confirm = confirm('are you sure you want delete this place')
    // console.log(confirm);
  return (
    <div className={"row mt-5"}>
      <div className={"col-6 "}>
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

      </div>
      <div className={"col-6"}>
          <h3>Places need Approving</h3>
          {places.map((place,index)=><MaterialCard
            title = {place.title}
            note = {place.description}
            img={place.images[0]}
            actions ={[{handler:approve(index,place._id), type:'Approve'},
          {handler:deletePlace(index,place._id), type:'Delete'}]}
            // btn1_name={"Delete"}
            // btn2_name={"Approve"}
            // approve = {approve}
            // delete = {deletePlace}
            // index= {index}
            // id = {place._id}
          />)}
            {/* {places.map((place,index)=> <>
              <Card
                title = {place.title}
                description = {place.description}
                btn1_name={"Delete"}
                btn2_name={"Approve"}
                approve = {approve}
                delete = {deletePlace}
                index= {index}
                id = {place._id}
              />
            
             
             </>)} */}
      </div>
    </div>
  )
}
