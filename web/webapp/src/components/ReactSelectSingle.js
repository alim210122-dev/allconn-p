import React from 'react'
import Select from 'react-select'

const SelectComponents = (props) => (
  <Select options={props.options}   />
)

export default SelectComponents; 



/*
#1. 옵션 형태
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
 */