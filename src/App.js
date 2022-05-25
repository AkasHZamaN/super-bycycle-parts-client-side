import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from '../src/Pages/Navber/Navber';
import Home from '../src/Pages/Home/Home';
import Warehouse from '../src/Pages/Warehouse/Warehouse';
import Login from '../src/Pages/Login/Login';
import SignUp from '../src/Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import PurchaseProduct from './Pages/Warehouse/PurchaseProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Footer/Footer';
import ResetPass from './Pages/Login/ResetPass';
import RequireAuth from './Pages/Login/RequreAuth';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/warehouse' element={<Warehouse></Warehouse>}></Route>

        <Route path='/warehouse/:productId' element={
        <RequireAuth>
          <PurchaseProduct></PurchaseProduct>
        </RequireAuth>}>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resetPass' element={<ResetPass></ResetPass>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
