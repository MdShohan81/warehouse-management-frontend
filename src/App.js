import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import InventoryItem from './components/InventoryItem/InventoryItem';
import Items from './components/Items/Items';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Myitem from './components/MyItem/Myitem';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/manageinventory' element={
              <RequireAuth>
                <Items></Items>
              </RequireAuth>
            }></Route>
            <Route path='/inventory/:inventoryId' element={
              <RequireAuth>
              <InventoryItem></InventoryItem>
              </RequireAuth>
            }></Route>
            <Route path='/checkout/:inventoryId' element={<Checkout></Checkout>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='myitem' element={<Myitem></Myitem>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
