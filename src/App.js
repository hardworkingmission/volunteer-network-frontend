import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout';
import Events from './components/Events/Events';
import AddEvent from './components/AddEvent/AddEvent';
import Admin from './components/Admin/Admin';
import VolunteerList from './components/VolunteerList/VolunteerList';
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/LogIn/LogIn'
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout/'>
          <Route path=':volunteerServiceId' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
          }/>
        </Route>
        <Route path='/events' element={
          <RequireAuth>
            <Events/>
          </RequireAuth>
        }/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login'element={<LogIn/>}/>
        <Route path='/admin' element={
          <RequireAuth>
            <Admin/>
          </RequireAuth>
        }>
            <Route path='addevent' element={<AddEvent/>}/>
            <Route path='volunteerlist' element={<VolunteerList/>}/>
            <Route index element={<VolunteerList/>}/>
        </Route>

      </Routes>
    
    </div>
  );
}

export default App;
