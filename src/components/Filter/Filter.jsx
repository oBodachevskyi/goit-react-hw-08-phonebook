import React from 'react';

const Filter = ({value, onChange}) => {
    return (  <label>
        <h3>Find contacts by name</h3>
        <input   value={value}  onChange={onChange}   type="text"/>
      </label>

    )
}

export default Filter