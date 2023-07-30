import axios from 'axios'
import { BASE_PATH_SERVICE, KEY } from '../utils/constants.mjs'

export default class FileManagerClient {
  config = null

  constructor () {
    this.config = {
      headers: {
        Authorization: `Bearer ${KEY}`
      }
    }
  }

  async loadFileList () {
    let result = null
    try {
      const res = await axios.get(`${BASE_PATH_SERVICE}/files`, this.config)
      result = Array.from(res.data.files)
    } catch (e) {
      console.error(e)
      throw e
    }
    return result
  }

  async getDataFromFile (filename) {
    let result = null
    try {
      const res = await axios.get(`${BASE_PATH_SERVICE}/file/${filename}`, this.config)
      result = res.data
    } catch (e) {
      console.warn(`Warning: error load file ${filename}: ${e.message}`)
    }
    return result
  }
}
