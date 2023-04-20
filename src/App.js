import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/signIn';
import Home from './components/home';
import About from './components/about';
import Addpost from './components/addpost';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route element={<SignUp />} path='/signup' />
          <Route element={<SignIn />} path='/' />
          <Route element={<Home/>} path='/home'/>
          <Route element={<About/>} path='/about'/>
          <Route element={<Addpost/>} path='/addpost'/>
          {/* <Route element={<Admin/>} path="/admin" /> */}

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
