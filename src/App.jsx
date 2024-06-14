import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Home from './pages/home';
import Contacto from './pages/contacto';
import Producto from './pages/producto';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos' element={<Producto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App