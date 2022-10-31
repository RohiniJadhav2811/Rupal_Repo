import React from "react";
import First from "./first_que";
const Second = (props) => {
    const{car} = props
    return(
        <div>

        <br></br>
        <h3>Question 2<h5>(with using props)</h5></h3>
        <div >
        <div>Model: {car.model}</div>
        <div>Comapny: {car.company}</div>
        <div>Price: {car.price}</div>
        <div>Color: {car.configuration.color}</div>
        <div>Fuel: {car.configuration.fuel}</div>
        <div>Cyinder: {car.configuration.cylinder}</div>
        <div>FuelTankCapacity: {car.fuelTankCapacity}</div>
        <div>City: {car.configuration.mileage.city}</div>
        <div>Highway: {car.configuration.mileage.highway}</div>
        <div>Features: {car.features}</div>
        </div>
        <hr />
        </div>
    )
}
export default Second