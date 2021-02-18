import axios from 'axios';
import {useEffect,useState} from 'react';
import {GoogleMap,withScriptjs,withGoogleMap, Marker,InfoWindow} from 'react-google-maps';
import MaterialCard from '../../components/card/materialCard.jsx';
import {mapStyles} from './mapStyles.js'


function Map(props){
  const [selectedPlace, setSelectedPlace] = useState(null)
 
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{lat:30.033333, lng:31.233334}}
      defaultOptions={{styles:mapStyles}}
    >
    {props.places.map(place=>
   <Marker
      position={{lat:place.location.coordinates[1], lng:place.location.coordinates[0]}}
      icon={{
        url:'/item.png',
        scaledSize: new window.google.maps.Size(25,25)
      }}
      onClick={()=>setSelectedPlace(place)}
    />)}
    {selectedPlace && <InfoWindow
          position={{
                      lat:selectedPlace.location.coordinates[1],
                      lng:selectedPlace.location.coordinates[0]
                      }}

          onCloseClick={()=>setSelectedPlace(null)}
    >
      <div style={{width:"300px"}}>
        <MaterialCard
          img={selectedPlace.images[0]}
          title={selectedPlace.title}
          note={selectedPlace.description}
        />
      </div>

    </InfoWindow>}
    </GoogleMap>
    
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
 
  export default function MapPlaces() {
    const [Places, setPlaces] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3000/place/list').then(async response =>
      {
          setPlaces(response.data.data)
      })
    }, [])

  return (
    <div style={{width:"90vw",height:"100vh"}}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDarw1gBsbUVJV8CJ1hdnSHG8JEyIylMvI
          `}
          loadingElement={<div style={{height:"100%"}}></div>}
          containerElement={<div style={{height:"100%"}}></div>}
          mapElement={<div style={{height:"100%"}}></div>}
          places={Places}
          
        />
    </div>
  )
}
