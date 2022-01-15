import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CheckOut from './pages/Check_out';
import Home from "./pages/Home";

function App() {
   return (
      <>
      <Router>
         <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/checkout' element={<CheckOut/>}></Route>
         </Routes>
      </Router>
      </>
   );
}

export default App;
