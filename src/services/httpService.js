import axios from 'axios'

const url = "http://localhost:3000/api"

class HttpService {
  getConfigs = async () => {
    try {
      const { data } = await axios.get(`${url}/configurations`)
      return data
    } catch (e) {
      console.log(e.message)
    }
  }

  getSelection = async () => {
    try {
      const { data } = await axios.get(`${url}/selections`)
      return data
    } catch (e) {
      console.log(e.message)
    }
  }

  getDriver = async () => {
    try {
      const { data } = await axios.get(`${url}/user`)
      return data
    } catch (e) {
      console.log(e.message)
    }
  }

  postSelection = async (payload) => {
    try {
      const data = await this.postAxios('makeSelection', payload)
      return data
    } catch (e) {
      console.log(e.message)
    }
  }

  postRacer = async (payload) => {
    try {
      const data = await this.postAxios('setStreetRacerUser', payload)
      return data
    } catch (e) {
      console.log(e.message)
    }
  }

  postVip = async (payload) => {
    try {
      const data = await this.postAxios('setVipUser', payload)
      return data
    } catch (e) {
      console.log(e.message)
    }
  }
  
  postAxios = async (path, payload) => { 
    const { data } = await axios({
      method: 'post',
      url: `${url}/${path}`,
      data: payload,
      headers: {'Content-Type': 'application/json'},
    })
    return data
  }
}



export default new HttpService()