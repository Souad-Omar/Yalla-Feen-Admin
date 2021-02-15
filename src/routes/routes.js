import {Redirect, Route} from "react-router-dom";
import {lazy,Suspense} from 'react';
import Navbar from "../components/navBar/navbar";
import { useSelector, useDispatch } from "react-redux";

const Login = lazy(()=> import('../pages/auth/login'));
const Logout = lazy(()=> import('../pages/auth/logout'));
const Home = lazy(()=> import('../pages/home/Home'));
const User = lazy(()=> import('../pages/user/UserHome'));
const Place = lazy(()=> import('../pages/place/PlaceHome'));
const Category = lazy(()=> import('../pages/category/CategoryHome'));


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


export default function Routes() {

 
  const login = useSelector(state => state.login)

  const PrivateRouter = (props)=>{
    return <Route exact path={props.path} render={data=>(
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
                <PrivateRouter  path="/home"  component={Home}/>
                <PrivateRouter  path="/"  component={Home}/>
                <PrivateRouter  path="/users"  component={User}/>
                <PrivateRouter  path="/places"  component={Place}/>
                <PrivateRouter  path="/categories"  component={Category}/>
          </Suspense>
      </div>
    </>
  )
}
