import React from 'react'
import { connect } from 'react-redux'
import { Checkbox, FormLabel } from '@material-ui/core';
import { setDriver, setRacer, setVip } from '../../redux/actions'

import './style.css'

const DriverSelection = (props) => {
  React.useEffect(() => {
    props.setDriver()
  }, [])

  const handleChangeRacer = async () => {
    await props.setRacer({value: !props.racer})
  }

  const handleChangeVIP = async () => {
    await props.setVip({value: !props.vip})
  }

  return (
  <div className="driver">
    <div>
      <FormLabel>Driver Racer</FormLabel>
      <Checkbox
        checked={props.racer}
        onChange={handleChangeRacer}
        value="checkedA"
      />
    </div>
    <div>
      <FormLabel>Driver VIP</FormLabel>
        <Checkbox
          checked={props.vip}
          onChange={handleChangeVIP}
          value="checkedB"
          color="primary"
      />
    </div>
  </div>
)
}
export default connect(({driver}) => ({
  racer: driver.streetRacer,
  vip: driver.vip
}),
{
  setDriver, setRacer, setVip
})(DriverSelection)
