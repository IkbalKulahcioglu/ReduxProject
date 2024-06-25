import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MuffinList from './components/MuffinList'
import {useEffect} from 'react';
import { calculateTotal } from './control/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const{cartItems}=useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(calculateTotal())
  },[cartItems])
  return (
    <>
     <Navbar/>
     <MuffinList/>
    </>
  )
}

export default App
