import React from 'react';

function Weather({ result }) {

    // Extract the values
    const { name, main } = result;

    if (!name) return null;

    // Substract Kelvin degrees
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is: </h2>
                <p className="temperature">
                {parseInt(main.temp - kelvin, 10)}<span> &#x2103; </span>
                </p>
                <p>Maximum Temperature: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p>Minimum Temperature: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            </div>
        </div>
    )
}

export default Weather;