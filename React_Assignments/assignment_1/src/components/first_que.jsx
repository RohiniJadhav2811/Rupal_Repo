import React from "react";

const First = () => {
    const car = {
        model: 'i20',
        company: 'Hyundai',
        price: 20,
        configuration: {
            color: 'gray',
            fuel: 'petrol',
            cylinder: 4,
            fuelTankCapacity: 37,
            mileage: {
                city: 14,
                highway: 20,

            },
        },
        features: ['touch screen','bluetooth','alloy wheels','powersteering'],
    }
  return (
    <div>
        <h2>React Assignment 1</h2>
        <br></br>
        <h3>Question 1<h5>(without using props)</h5></h3>
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
export default First