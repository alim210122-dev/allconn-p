import React from 'react'
import Select from 'react-select'

const MultiSelectBox = (props) => (

  <Select
    isMulti
    name="colors"
    options={props.options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
)

export default MultiSelectBox; 
