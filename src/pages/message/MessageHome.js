import axios from 'axios'
import {useState,useEffect} from 'react'
import MaterialCard from '../../components/card/materialCard'
import SectionHeader from '../../components/sectionHeader/sectionHeader'

export default function MessageHome() {
  const [messages, setMessages] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/message/list').then(response =>{
       console.log(response);
       setMessages(response.data.messages)
      })
    }, [])
  return (
    <div className={'row mt-5'}>
      <div className={'col-6 magic'}>
        <SectionHeader
            text="Messages"
            position="center"
        />
      { messages.map((message,index)=>
        <MaterialCard
            key={index}
            note={message.name}
            title={message.msg}
            actions={[
            { handler: undefined, type: "Delete" },
            { handler: undefined, type: "Edit" },
          ]}
            
        />)}
      </div>
    </div>
 
  )
}
