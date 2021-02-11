import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
// import Navbar from './components/navBar/navbar';
import Routes from './routes/routes'

function App() {
  const isAuthenticated = React.createContext({
    value:false,
    setValue:()=>{}
  })
  return (
    <>  
    <Router>
        <Routes/>
    </Router>
    </>
  );
}

export default App;
