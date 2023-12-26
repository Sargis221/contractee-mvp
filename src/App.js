import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/footer';
import Header from './pages/header';
import Main from './pages/main';
import About from './pages/about';
import Contact from './pages/contact';
import Riskassessment from './pages/riskassessment';
import Assign from './pages/assign';

function App() {
  return (
    <div className='App-main'>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} index/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='risk' element={<Riskassessment/>}/>
        <Route path='assign' element={<Assign/>}/>
      </Routes>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
