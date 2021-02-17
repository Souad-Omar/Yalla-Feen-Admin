import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import Table from "../../components/tabel/Table";


export default function Report() {
  const [Users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [Places, setPlaces] = useState([])
  const [approvedPlaces, setApprovedPlaces] = useState([])
  const [topPlaces, setTopPlaces] = useState([])
  const [counts, setCounts] = useState({})
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/user/aggregate').then(response=>{
      const aggre = response.data.userCountGraph;
      const aggre2 = response.data.placeCountGraph;
      const aggre3 = response.data.approvedPlaces;
      const aggre4 = response.data.activeUsers;
      let items = [];
      let items2 = [];
      let items3 = [];
      let items4 = [];
      aggre.map(item=>{items.push([item._id,item.total])})
      aggre2.map(item=>{items2.push([item._id,item.total])})
      aggre3.map(item=>{items3.push([`${item._id?'True':'False'}`,item.total])})
      aggre4.map(item=>{items4.push([`${item._id?'True':'False'}`,item.total])})
      setUsers(items)
      setActiveUsers(items4)
      setPlaces(items2)
      setApprovedPlaces(items3)
      setTopPlaces(response.data.topPlaces)
      setCounts(response.data.counts)
      // console.log(response.data.counts);
      console.log(counts);
      
    })
  }, [])
  
  return (
    <>
    <div className={"row m-3"}>
      <div className={"col-6"}>
        <h2>#Users: {counts.countUsers}</h2>
      </div>
      <div className={"col-6"}>
        <h2>#Places: {counts.countPlaces}</h2>
      </div>
    </div>
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
    <Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Users', '#Actives'],
          ...activeUsers
        ]}
        options={{
          title: 'Active Users',
          sliceVisibilityThreshold: 0.2, // 20%
        }}
       
      />
    <Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Places', 'Approved'],
          ...approvedPlaces
        ]}
        options={{
          title: 'Places are Approved',
          sliceVisibilityThreshold: 0.2, // 20%
        }}
       
      />
    </div>
    </>
  )
}
