import React from 'react';
import '../assets/select.css';
import PropTypes from 'prop-types';

export default function Select(props) {
    return (
        <div className="select-wrapper">
        <label className="select-label">{props.label}</label>
        <select className="select-options" value={props.sort} onChange={props.handleClick}>
            {props.options && props.options.map((option,index) =>{
                return <option>{option}</option>
            })}
        </select>
        <span className="select-arrow"></span>
    </div>
    )
}
Select.propTypes = {
	/** required - options of select  */
	options: PropTypes.array.isRequired,
}
