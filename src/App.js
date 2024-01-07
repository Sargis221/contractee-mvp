import './App.css';
import {Route, Routes} from 'react-router-dom';
import Footer from './pages/footer';
import Header from './pages/header';
import Main from './pages/main';
import About from './pages/about';
import Contact from './pages/contact';
import Riskassessment from './pages/riskassessment';
import Assign from './pages/assign';
import Upload from './pages/upload';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import {AuthProvider} from './context/AuthContext';
import ProtectedRoute from './utils/protected/ProtectedRoute';
import Documents from "./pages/documents";

function App() {
    return (
        <div className='App-main'>
            <div className="App">
                <Header/>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<Main/>} index/>
                        <Route path='about' element={<About/>}/>
                        <Route path='contact' element={<Contact/>}/>
                        <Route path='risk' element={<Riskassessment/>}/>
                        <Route path='assign' element={<Assign/>}/>
                        <Route path='signup' element={<SignUp/>}/>
                        <Route path='signin' element={<SignIn/>}/>
                        <Route path='upload' element={<ProtectedRoute><Upload/></ProtectedRoute>}/>
                        <Route path='documents' element={<Documents/>}/>
                    </Routes>
                </AuthProvider>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
