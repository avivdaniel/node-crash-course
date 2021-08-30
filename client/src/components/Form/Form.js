import React, {useState} from 'react';
import './form.css'
import PropTypes from 'prop-types';

const Form = ({onSubmit}) => {
    const [lngValue, setLngValue] = useState('');
    const [latValue, setLatValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
        onSubmit({
            lng: lngValue,
            lat: latValue
        });
    }

    return (
        <div className="Form">
            <div id="ninja-container">
                <form id="search" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="input_latitude">Enter your latitude:</label>
                        <input
                            id="input_latitude"
                            placeholder="latitude"
                            required
                            value={latValue}
                            onChange={(e)=> setLatValue(e.target.value)}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="input_longitude">Enter your longitude:</label>
                        <input
                            id="input_longitude"
                            placeholder="longitude"
                            required
                            value={lngValue}
                            onChange={(e)=> setLngValue(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Find Ninjas"/>
                </form>
            </div>
        </div>
    );
};

Form.propTypes = {};

export default Form;
