import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Add from './component/Add';
import Dashboard from './component/Dashboard';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Login from './component/Login';
import Update from './component/Update';

function App() {
  const location = useLocation();
  return (
    <>
    <div>
    <NavBar currentRoute={location.pathname} />
    <Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/login' element={<Login />}/> 
    <Route path='/add' element={<Add/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/update' element={<Update/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;