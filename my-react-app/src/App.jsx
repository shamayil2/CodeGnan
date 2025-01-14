import React, { useEffect } from "react";
import "./styles.css"
const App = () => {

 useEffect(()=> {

  const disableCopy = (event) => {
    event.preventDefault()
    alert("Copy Functionality is Disabled")
  }

  const disableRightClick = (event) => {
    event.preventDefault()
    alert("Right Click is Disabled")
  }

  const showTopAlert = (event) => {
    if(event.clientY<15){
      alert("Please dont leave the page")
    }
  }

  
 

  document.addEventListener("contextmenu",disableRightClick)
  document.addEventListener("copy",disableCopy)
  window.addEventListener("mousemove",showTopAlert)
  
 


 })

 

  return(
    <>
    <div className="main">
    <h1>In this website , copy is disabled.</h1>
    <h1>Right Click is disabled</h1>
    
 
    </div>
    </>
  )

}

export default App;