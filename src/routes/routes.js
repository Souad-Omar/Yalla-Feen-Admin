import {Redirect, Route} from "react-router-dom";
import {lazy,Suspense} from 'react';
import Navbar from "../components/navBar/navbar";
import { useSelector, useDispatch } from "react-redux";

const Login = lazy(()=> import('../pages/login/login'));
const Home = lazy(()=> import('../pages/home/Home'));


const authentication = {
  isLoggedIn:true,
  onAuthentication(){
    this.isLoggedIn = true;
  },
  getLogInStatus(){
    return this.isLoggedIn;
  }
}


//
// const requireLogin = (to, from, next) => {
//   if (to.meta.auth) {
//     if (getIsLoggedIn()) {
//       next();
//     }
//     next.redirect('/login');
//   } else {
//     next();
//   }
// };


 function Logout() {

  return (
    <div>
      
    </div>
  )
}


export default function Routes() {

 
  const login = useSelector(state => state.login)

  const PrivateRouter = (props)=>{
    return <Route path={props.path} render={data=>(
               login.isLogged===true
               ?<props.component {...data}></props.component>
               :<Redirect to={{pathname:"/login"}}/>)}/>
 }
 
  return (
    <>
        <Navbar/>
     <div className={"container"}>
          <Suspense fallback={<div>loading...</div>}>
                <Route  path="/login" exact component={Login}/>
                <Route  path="/logout" exact component={Logout}/>
                <PrivateRouter  path="/home" exact component={Home}/>
                {/* <PrivateRouter  path="/" exact component={Home}/> */}
          </Suspense>
      </div>
    </>
  )
}
