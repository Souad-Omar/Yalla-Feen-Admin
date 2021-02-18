import {Redirect, Route} from "react-router-dom";
import {lazy,Suspense} from 'react';
import Navbar from "../components/navBar/navbar";
import { useSelector, useDispatch } from "react-redux";

const Login = lazy(()=> import('../pages/auth/login'));
const Logout = lazy(()=> import('../pages/auth/logout'));
const Home = lazy(()=> import('../pages/home/Home'));
const Report = lazy(()=> import('../pages/report/Report'));
const PlacesMap = lazy(()=> import('../pages/map/MapPlaces'));
const User = lazy(()=> import('../pages/user/UserHome'));
const ChangeUser = lazy(()=> import('../pages/user/ChangeUser'));
const Place = lazy(()=> import('../pages/place/PlaceHome'));
const ChangePlace = lazy(()=> import('../pages/place/ChangePlace'));
const Category = lazy(()=> import('../pages/category/CategoryHome'));
const ChangeCategory = lazy(()=> import('../pages/category/ChangeCategory'));
const Tags = lazy(()=> import('../pages/tags/TagsHome'));
const Comments = lazy(()=> import('../pages/comments/CommentsHome'));
const Message = lazy(()=> import('../pages/message/MessageHome'));
const Advertise = lazy(()=> import('../pages/advertise/AdvertiseHome'));



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
        {login.isLogged && <Navbar/>}
     <div className={"container"}>
          <Suspense fallback={<div>loading...</div>}>
                <Route  path="/login" exact component={Login}/>
                <Route  path="/logout" exact component={Logout}/>
                <PrivateRouter  path="/"  component={Home}/>
                <PrivateRouter  path="/home"  component={Home}/>
                <PrivateRouter  path="/report"  component={Report}/>
                <PrivateRouter  path="/places-map"  component={PlacesMap}/>
                <PrivateRouter  path="/users"  component={User}/>
                <PrivateRouter  path="/users/:id"  component={ChangeUser}/>
                <PrivateRouter  path="/places"  component={Place}/>
                <PrivateRouter  path="/places/:id"  component={ChangePlace}/>
                <PrivateRouter  path="/categories"  component={Category}/>
                <PrivateRouter  path="/categories/:id"  component={ChangeCategory}/>
                <PrivateRouter  path="/tags"  component={Tags}/>
                <PrivateRouter  path="/comments"  component={Comments}/>
                <PrivateRouter  path="/messages"  component={Message}/>
                <PrivateRouter  path="/advertises"  component={Advertise}/>

          </Suspense>
      </div>
    </>
  )
}
