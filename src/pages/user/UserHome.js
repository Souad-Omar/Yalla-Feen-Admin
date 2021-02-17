import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import MaterialInput from '../../components/materialInput/materialInput';
import MaterialCheckbox from '../../components/materialCheckbox/materialCheckbox';
import MaterialRadioGroup from '../../components/materialRadioGroup/materialRadioGroup';
import MaterialButton from '../../components/materialButton/materialButton';
import MaterialSelect from '../../components/materialSelect/MaterialSelect';
import MaterialCard from '../../components/card/materialCard';


export default function UserHome() {
  const [users, setusers] = useState([]);
  // on load page
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/user/list').then(response => {
      
      setusers(response.data.usersData);
    });
  }, []);
  // component logic
  // const addUser = ()=>{
  //   console.log(document.getElementsByName('username')[0].value);
  // }
  const deleteUser =(index,id)=>()=>{
    alert('you will delete user')
    axios.delete(`http://127.0.0.1:3000/user/delete/${id}`).then(response=>{

      setusers(users.filter((item,j)=> index !== j))
      
    })}

    const panUser =(index,id)=>()=>{
      alert('you will pan user')
      axios.put(`http://127.0.0.1:3000/user/pan/${id}`).then(response=>{

        setusers(users.filter((item,j)=> {
          if(index == j){
            item.isactive = !item.isactive
          }
        return true
        })
          )
          
      });
    } 
  
  return (
      <div className={'row mt-5'}>
        <div className={'col-9 magic'}>
          <h2>UserData</h2>
         { users.map((user,index)=>
           <MaterialCard
              img={user.avatar}
              note={user.email}
              title={user.username}
              actions={[
              { handler: deleteUser(index, user._id), type: "Remove" },
              { handler: panUser(index,user._id), type: (user.isactive)?"Pan":"Unpan" },
            ]}
              
          />)}
        </div>
        {/* <div className={'col-6'}>
          <MaterialCheckbox
              name="isactive"
              label="Is active"
              value="checked"
          />
          <MaterialInput
              name="username"
              label="User name"
              placeholder="Ex: lwalwa"
              isRequired={true}
              errorMessage={"try another one"}
          />
          <div className="row">
            <div className="col-6">
              <MaterialInput
                  name="firstname"
                  label="First name"
                  placeholder="Ex: Joe"
                  isRequired={true}
              />
            </div>
            <div className="col-6">
              <MaterialInput
                  name="lastname"
                  label="Last name"
                  placeholder="Ex: Mostafa"
                  isRequired={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <MaterialInput
                  name="email"
                  label="E-mail"
                  placeholder="your-email@gmail.com"
                  isRequired={true}
              />
            </div>
            <div className="col-6">
              <MaterialSelect
                  label="City"
                  isRequired={true}
                  options={['Cairo', 'Aswan', 'Alexandria']}
                  noSelectionText="Choose your city"
                  name="city"
                  value="Cairo"
              />
            </div>
          </div>
          <MaterialInput
              name="password"
              label="Password"
              placeholder="At least 6 characters"
              isRequired={true}
              type="password"
          />
          <MaterialInput
              name="confirmPassword"
              label="Confirm password"
              placeholder="Confirm password"
              isRequired={true}
              type="password"
          />
          
          <div className="row">
            <div className="col-6">
              <MaterialRadioGroup
                  name="userType"
                  values={['Admin', 'Client']}
                  header="User type"
                  isRequired={true}
              />
            </div>
          </div>
          
          <MaterialButton
              text="Submit!"
              type="submit"
              onClickHandler={addUser}
          />
        </div> */}
      </div>
  );
}
