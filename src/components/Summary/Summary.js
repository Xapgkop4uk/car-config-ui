import React from 'react'
import { connect } from 'react-redux'
import { Paper, Typography } from '@material-ui/core';

import './style.css'

const Summary = (props) => {

  
  const count = props.selections.filter(selection => selection.option !== 'DEFAULT').length
  const cost = props.selections.reduce((sum, elem) => {
    const config = props.configs.find(conf => conf.id === elem.id)
    if(!config) return 0
    const option = config.options.find(option => option.id === elem.option)
    if(!option) return 0
    return option.cost + sum
  }, 0);


  return (
  <Paper className="summary" elevation={1}>
    <Typography variant="h5" component="h3">
      CART
    </Typography>
    <Typography component="p">
      Count : {count}
    </Typography>
    <Typography component="p">
      Cost : {cost}
    </Typography>
  </Paper>
  )
}

export default connect(({ configs, selections }) => ({ configs, selections }))(Summary)