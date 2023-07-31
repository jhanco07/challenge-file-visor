import axios from 'axios'

export default class FileManagerClient {
  async loadFileList () {
    const res = await axios.get(`${process.env.BASE_PATH_SERVICE}/files`, this.setHeaders())
    const result = Array.from(res.data.files)

    return result
  }

  async getDataFromFile (filename) {
    let result = null
    try {
      const res = await axios.get(`${process.env.BASE_PATH_SERVICE}/file/${filename}`, this.setHeaders())
      result = res.data
    } catch (e) {
      console.warn(`Warning: error load file ${filename}: ${e.message}`)
    }
    return result
  }

  setHeaders () {
    return {
      headers: {
        Authorization: `Bearer ${process.env.KEY}`
      }
    }
  }
}
