import React, { Component,useState, useEffect } from "react";
//import { render } from "react-dom";
import Layout from '../../../components/layout'

const Geolocation = () => {
  
 //     date: new Date()

 
 const [state , setBL] = useState({
  latidTude: 3223.22,
  logiTude: 2,
  lastname: "Bjørnevik.",
  successMessage: null
})
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    let { latitude, longitude } = position.coords;
  //  const data = await getWeatherByCords(latitude, longitude);
    console.log('setting weather',latitude);
   
    setBL(prevState => ({
      ...prevState,
      latidTude:  latitude,
      longiTude:  longitude,
      lastname :  "longitude"
  }))
 //   setWeather(data);
  //  let address = await cordsToAddress(latitude, longitude);
  });
}, []);
//console.log('setting weather',latitude);
//  componentDidMount() {
 //   navigator.geolocation.getCurrentPosition(function(position) {
    //  this.setState({latitude : position.coords.latitude});
   //   console.log("Latitude is :", position.coords.latitude);
     console.log("STATE Bredegraden er:",  state.latidTude); 
    //  console.log("Longitude is :", position.coords.longitude);
   // });
 // }
 // It is {this.state.date.toLocaleTimeString()}

// Breddegrad: {latitude}
//Lengdegrd: {longitude}
    return (
       <Layout>
      <div>
        <h4>How to use geolocation JavaScript API in React</h4>
        <p>Lengde grad: {state.longiTude}</p>
        <p>Bredde grad: {state.latidTude}</p>
      </div>
      </Layout>
     
    );
    
  
}
export default Geolocation 
