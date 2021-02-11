import {Route} from "react-router-dom";
import {lazy,Suspense} from 'react';
import Navbar from "../components/navBar/navbar";


const Login = lazy(()=> import('../pages/login/login'));
const Home = lazy(()=> import('../pages/home/Home'));


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
                <Route  path="/" exact component={Home}/>
                <Route  path="/home" exact component={Home}/>
                <Route  path="/login" exact component={Login}/>
          </Suspense>
      </div>
    </>
  )
}
