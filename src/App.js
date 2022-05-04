import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/items' element={<Items></Items>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
    </div>
  );
}

export default App;
