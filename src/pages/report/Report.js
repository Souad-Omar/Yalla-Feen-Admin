import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import Table from "../../components/tabel/Table";


export default function Report() {
  const [Users, setUsers] = useState([]);
  const [Places, setPlaces] = useState([])
  const [topPlaces, setTopPlaces] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/user/aggregate').then(response=>{
      const aggre = response.data.userCountGraph;
      const aggre2 = response.data.placeCountGraph;
      let items = [];
      let items2 = [];
      aggre.map(item=>{items.push([item._id,item.total])})
      aggre2.map(item=>{items2.push([item._id,item.total])})
      setUsers(items)
      setPlaces(items2)
      setTopPlaces(response.data.topPlaces)
      
    })
  }, [])
  
  return (
    <>
    <h2>Top Places</h2>
    <Table
          action={false}
          header={['title','rates','favorites_count']}
          data={topPlaces}
        />
    <div style={{ display: 'flex', maxWidth: 900 }}>
    <Chart
          height={'300px'}
          width={'500px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['City','#Users'],
            ...Users
          ]}
          options={{
            // Material design options
            chart: {
              title: '#Users per city',
            },
            colors:['#8bc9e0'],
            backgroundColor:[''],
          
            
          }}
          // For test
        />
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['City','#Places'],
            ...Places
          ]}
          options={{
            // Material design options
            chart: {
              title: '#Places per city',
            },
           
            colors:['#52ac43'],
          }}
          // For test
        />
    </div>
    <div style={{ display: 'flex' }}>
     
    </div>
    </>
  )
}
