import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Items from './components/Items/Items';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/items' element={<Items></Items>}></Route>
        </Routes>
    </div>
  );
}

export default App;
