import './App.css'
import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import {Routes,Route} from 'react-router'
function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Route>
   
  </Routes>
  </>)
}

export default App
