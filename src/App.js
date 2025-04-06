// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { LandingPage } from './pages/LandingPage';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import { Dashboard } from './pages/Dashboard';
// import { Courses } from './pages/Courses';
// import { Video } from './pages/Video';

// export function App() {
//     return (
//       <Router>
//         <Routes>
//           <Route path='/' element = {<LandingPage/>}></Route>
//           <Route path='/signup' element = {<SignUp/>}></Route>
//           <Route path='/login' element = {<Login/>}></Route>
//           <Route path='/dashboard' element = {<Dashboard/>}></Route>
//           <Route path='/courses' element = {<Courses/>}></Route>
//           <Route path='/video' element = {<Video/>}></Route>
//         </Routes>
//       </Router>
//     );
// }

// export default App;




import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { Video } from './pages/Video';

const PrivateRoute = ({children}) =>{
  const isAuthenticated = localStorage.getItem("loggedin") === "true";
  return isAuthenticated ? children : <Navigate to = "/login" replace />;
};

export function App() {
    return (
      <Router>
        <Routes>
          <Route path='/' element = {<LandingPage/>}></Route>
          <Route path='/signup' element = {<SignUp/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/dashboard' element = {<Dashboard/>}></Route>
          <Route path='/dashboard' element = {<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
          <Route path='/courses' element = {<Courses/>}></Route>
          <Route path='/video' element = {<Video/>}></Route>
        </Routes>
      </Router>
    );
}

export default App;