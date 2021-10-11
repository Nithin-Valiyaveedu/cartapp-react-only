import React,{useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import "react-toastify/dist/ReactToastify.css"
import './App.css';
import { toast,ToastContainer } from "react-toastify";

import {Container,Row,Col} from "reactstrap"

import Cart from "./Components/Cart";


import BuyPage from "./Components/BuyPage";


function App() {

  const [cartItem, setCartItem]= useState([])

  //Function add to cart
  const addInCart = item =>{
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id===item.id
    })

    if(isAlreadyAdded!==-1){
      toast("already added in cart",{
      type:"error"})
      return;
    }
    setCartItem([...cartItem,item])
  }
 
  //Buy now function

  const buyNow=()=>{
    setCartItem([])
    toast("",{
      type: "success"
    })
  }
  //Remove item function
  const removeItem = item=>{
    setCartItem(cartItem.filter(singleItem =>singleItem.id!==item.id))
  } 


  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;
