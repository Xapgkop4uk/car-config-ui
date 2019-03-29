import React from 'react'
import { Radio, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';

const labelWIthCost = (option) =>
  <div>
    {option.name} : {option.cost}
  </div>

export default (props) => {
  const { name, id, options } = props.prop

  const handleChangeValue = (event) => {
    const optionId = event.target.value;
    props.onSelect(id, options.find(option => option.id === optionId))
  }

  return (
    <React.Fragment>
      <FormLabel>{name}</FormLabel>
      <RadioGroup
        aria-label={name}
        name={id}
        value={props.value}
        onChange={handleChangeValue}
      >
        {options.map(option =>
          <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={labelWIthCost(option)} />
        )}
      </RadioGroup>
    </React.Fragment>
  )
}