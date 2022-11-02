import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {Switch} from "react-router-dom"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import ListOfHotel from './components/ListOfHotel';
import SelectedHotelDetails from './components/SelectedHotelDetails';
import BookTable from './components/BookTable';
import AddHotel from './components/CancelReservation';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/> 
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Registration" element={<Registration/>}/>
      <Route path="/ListOfHotel" element={<ListOfHotel /> } />
      <Route path="/SelectedHotelDetails" element={<SelectedHotelDetails /> } />
      <Route path="/BookTable" element={<BookTable /> } />
      <Route path="/CancelReservation" element={<AddHotel/> } />
    </Routes>
    </div>
     </BrowserRouter>
  );
}

export default App;