import axios from 'axios'
import {useState,useEffect} from 'react'
import MaterialCard from '../../components/card/materialCard'
import SectionHeader from '../../components/sectionHeader/sectionHeader'

export default function AdvertiseHome() {
  const [advertises, setAdvertises] = useState([])
  const [places, setplaces] = useState([]);
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/advertise/list').then(response =>{
      //  console.log(response);
       setAdvertises(response.data.ads)
      }) 
      axios.get('http://127.0.0.1:3000/place/ads').then(response =>{
      //  console.log(response);
      setplaces(response.data.ads)
      })

    }, [])
    const manageAd = (index,id)=>(e)=>{
      if(window.confirm('Are you sure you want this action'))
      axios.put(`http://127.0.0.1:3000/place/manage-ad/${id}`).then(response=>{
  
        setplaces(places.filter((place,j)=> {
          if(index == j){
            place.isAdvertise = !place.isAdvertise
          }
        return true
        })
          )
          
      });
    }
  return (
    <div className={'row mt-5'}>
    <div className={'col-6 magic'}>
      <SectionHeader
          text="Custom Advertises"
          position="center"
      />
    { advertises.map((advertise,index)=>
      <MaterialCard
          key={index}
          note={advertise.owner}
          title={advertise.title}
          actions={[
          { handler: undefined, type: "Delete" },
          { handler: undefined, type: "Edit" },
        ]}
          
      />)}
    </div>
    <div className={'col-6 magic'}>
      <SectionHeader
          text="Places Advertises"
          position="center"
      />
    { places.map((place,index)=>
      <MaterialCard
          key={index}
          img={place.images[0]}
          note={place.owner}
          title={place.text}
          actions={[
            {handler: manageAd(index,place._id),
             type:(place.isAdvertise)?"removeAd":"addAsAd"}
        ]}
          
      />)}
    </div>
  </div>
  )
}
