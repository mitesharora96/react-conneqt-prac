import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Buttons from './components/Buttons';
import Temperature from './components/Temperature';
import TempButtons from './components/TempButtons';
import { useState } from 'react';
import Cart from './components/Cart'
import CartItems from './components/CartItems';
import TotalCart from './components/TotalCart';

function App() {
  var [count,setCount] = useState(0) 

  return (
    <>
    <div >
    <Cart></Cart>
    <CartItems></CartItems>
    <TotalCart></TotalCart>
    </div>
    <br/><hr/><br/>
    <center><h2>Welcome to Counter App by Mitesh</h2>
    <Heading count = {count}></Heading>
    <Buttons count = {count} setCount = {setCount}></Buttons>
    </center>
    <br/><hr/><br/>
    <center>
    <h2>Welcome to Temperature App by Mitesh</h2>
    <div className={`out-box ${count > 15 ? 'bg-danger' : count<0 ? 'bg-primary-subtle' : 'bg-info'} rounded`}>
    <Temperature count = {count}></Temperature>
    <TempButtons count = {count} setCount = {setCount}></TempButtons>
    </div>
    
    </center>
    </>
  );
}

export default App;
