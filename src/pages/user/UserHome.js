import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import MaterialInput from '../../components/materialInput/materialInput';
import MaterialCheckbox from '../../components/materialCheckbox/materialCheckbox';
import MaterialRadioGroup from '../../components/materialRadioGroup/materialRadioGroup';
import MaterialButton from '../../components/materialButton/materialButton';


export default function UserHome() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/user/list').then(response => {
      console.log(response);
      setusers(response.data.usersData);
    });
  }, []);
  return (
      <div className={'row mt-5'}>
        <div className={'col-6 border'}>
          <h2>UserData</h2>
          {users.map(user =>
              <>
                <div className={'list-group'}>
                  <a className="list-group-item list-group-item-action m-1">
                    <Link to={`/users/${user._id}`}>
                      <span className={'text-info font-weight-bold'}> {user.username} </span>
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
        <div className={'col-6'}>
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
          <MaterialInput
              name="email"
              label="E-mail"
              placeholder="your-email@gmail.com"
              isRequired={true}
          />
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
          <MaterialCheckbox
              name="isactive"
              label= "Is active"
              value="checked"
          />
          <MaterialRadioGroup
              name="userType"
              values={["Admin","Client"]}
              header="User type"
              isRequired={true}
          />
          <MaterialButton
              text="Submit!"
              type="submit"
          />
        </div>
      </div>
  );
}
