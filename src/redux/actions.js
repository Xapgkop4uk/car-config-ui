import httpService from '../services/httpService'
import { SET_CONFIGS, SET_SELECTION, SET_DRIVER } from './consts'

export const update = () => async dispatch => {
  const [configs, selections] = await Promise.all([httpService.getConfigs(), httpService.getSelection()])
  dispatch({
    type: SET_CONFIGS,
    payload: {configs, selections}
  })
}

export const selectProperty = (id, option) => async (dispatch, getState) => {
  if(!option || !option.id) return
  const response = await httpService.postSelection({id, option: option.id})
  dispatch({
    type: SET_SELECTION,
    payload: response
  })
}

export const setDriver = value => async dispatch => {
  const response = await httpService.getDriver()
  await dispatch({
    type: SET_DRIVER,
    payload: response
  })
}

export const setRacer = value => async dispatch => {
  const response = await httpService.postRacer(value)
  await dispatch({
    type: SET_DRIVER,
    payload: response
  })
  update()(dispatch)
}

export const setVip = value => async dispatch => {
  const response = await httpService.postVip(value)
  dispatch({
    type: SET_DRIVER,
    payload: response
  })
  update()(dispatch)
}