
import React from 'react'
import Button from '../controlles/button'
export default function Table(props) {
  const header = props.header;
  const data = props.data;
  // console.log(header[0]);
  return (
    <div >
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            {header.map(head =>
              <th scope="col">{head}</th>
            )}
            {props.action && <th scope="col">Action</th>}
          </tr>
        </thead>
        <tbody>
        {
          data.map((item,index)=>
          <tr>
             <th scope="row">{index+1}</th>
             {header.map(head=>
             <td>{item[head]}</td>
             )}
           { props.action &&
              <td><Button
               class={"btn btn-danger m-1"}
               name={"Delete"}
             />
             <Button
               class={"btn btn-primary "}
               name={"Edit"}
             /></td>}
          </tr> 
          )}
        </tbody>
      </table>
    </div>
  )
}
