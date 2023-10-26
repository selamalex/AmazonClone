import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{}, dispatch]= useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else{
        dispatch({
          type: 'SET_USER',
          user: null,

        });
      }
    });
   }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route
            path="/login"
            element={
              <>
               <Login/>
              </>
            }
          />
{/*
<Route
            path="/payment"
            element={
              <>
              <Elements stripe={promise}>
                <Nav/>
             <Payment/>
              </Elements>
              
              </>
            }
          /> */}
        <Route
            path="/checkout"
            element={
              <>
                <Nav />
                <Checkout/>
              </>
            }
          />
{/* <Route
            path="/orders"
            element={
              <>
                <Nav />
               <Home/>
              </>
            }
          /> */}
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home/>
              </>
            }
          />
 
        </Routes>

    </div>
    </Router>
   
   
  );
}

export default App;
