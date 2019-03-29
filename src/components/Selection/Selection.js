import React from 'react'
import { connect } from 'react-redux';
import { update, selectProperty } from '../../redux/actions'
import PropSelection from '../PropSelection/PropSelection';

import './style.css';

const Selection = (props) => {
  React.useEffect(() => {
    props.update()
  }, [])


  return (
    <div>
      {props.configs.map(prop => {
        const selectedValue = props.selections.find(selection => selection.id === prop.id)
        const value = selectedValue ? selectedValue.option : 'DEFAULT'
        return (
        <div key={prop.id} className="selection-form">
          <PropSelection prop={prop} onSelect={props.selectProperty} value={value} />
        </div>
      )})}
    </div>
  )
}

export default connect(({ configs, selections }) => ({ configs, selections }),
  { update, selectProperty }
)(Selection)