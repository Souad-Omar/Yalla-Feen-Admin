import axios from 'axios'
import {useState,useEffect} from 'react'

export default function MessageHome() {
  const [messages, setMessages] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/message/list').then(response =>{
       console.log(response);
       setMessages(response.data.messages)
      })
    }, [])
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 border"}>
        <h2>MessageData</h2>
        {messages.map(message=> <>
              <div className={"list-group"}>
              <a href="#" class="list-group-item list-group-item-action m-1">
                  <span className={"text-info font-weight-bold"}>{message.name}</span>
              </a>
              </div>
             </>)}
       
      </div>
      <div className={"col-md-3"}>
          
      </div>
    </div>
  )
}
