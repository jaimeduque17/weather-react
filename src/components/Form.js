import React, { useState } from 'react';

function Form({ queryData }) {

    // Component state
    // search = state, saveSearch = this.setState({})
    const [search, saveSearch] = useState({
        city: '',
        country: ''
    })

    const handleChange = e => {
        // Change state
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    const checkWeather = e => {
        e.preventDefault();

        // Pass the user search to the main component
        queryData(search);
    }

    return (
        <form
            onSubmit={checkWeather}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>
            <div className="input-field col s12">
                <select name="country" onChange={handleChange}>
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="CO">Colombia</option>
                    <option value="AR">Argentina</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Search Weather" />
            </div>
        </form>
    )
}

export default Form;