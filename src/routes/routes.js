import {Redirect, Route, Router} from "react-router-dom";
import {lazy,Suspense} from 'react';
import Navbar from "../components/navBar/navbar";


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

const PrivateRouter = (props)=>{
   return <Route path={props.path} render={data=>(
              authentication.getLogInStatus()===true
              ?<props.component {...data}></props.component>
              :<Redirect to={{pathname:"/login"}}/>)}/>
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
  return (
    <>
        <Navbar/>
     <div className={"container"}>
          <Suspense fallback={<div>loading...</div>}>
                <Route  path="/login" exact component={Login}/>
                {/* <PrivateRouter  path="/" exact component={Home}/> */}
                <PrivateRouter  path="/home" exact component={Home}/>
          </Suspense>
      </div>
    </>
  )
}
