import FileManagerClient from '../clients/file-manager-client.mjs'
import GeneralUtilities from '../utils/general-utilities.mjs'

export default class FileManagerService {
  filemanagerClient = null

  constructor () {
    this.filemanagerClient = new FileManagerClient()
  }

  async getFilesList () {
    const listFiles = await this.filemanagerClient.loadFileList()
    const list = GeneralUtilities.sortStringsByNumber(listFiles)
    return list
  }

  async getDataFromFile (filename) {
    const result = await this.filemanagerClient.getDataFromFile(filename)
    return result
  }

  async processLoadData (fileName) {
    try {
      const fileres = await this.getDataFromFile(fileName)
      const dataClean = this.cleanData(fileres, fileName)
      return dataClean
    } catch (e) { console.log(e) }
  }

  async loadAllData (fileName = null) {
    const listFiles = await this.getFilesList()
    let listLoad = []
    if (fileName) {
      const dataClean = await this.processLoadData(fileName)
      if (dataClean && dataClean.lines && dataClean.lines.length > 0) {
        listLoad = listLoad.concat(dataClean)
      }
      return listLoad
    }
    for (const file of listFiles) {
      const dataClean = await this.processLoadData(file)
      if (dataClean && dataClean.lines && dataClean.lines.length > 0) {
        listLoad = listLoad.concat(dataClean)
      }
    }

    return listLoad
  }

  cleanData (data, fileName) {
    if (!data) return

    const lines = data.split('\n')

    let result = []
    if (lines.length <= 1) {
      return
    }

    for (let i = 1; i < lines.length; i++) {
      const properties = lines[i].split(',')
      const validatelin = this.validateLine(properties, fileName)
      if (validatelin) {
        const obj = this.converLine(properties)
        result = result.concat(obj)
      }
    }

    return {
      file: fileName,
      lines: result
    }
  }

  converLine (properties) {
    const format = {
      text: properties[1],
      number: parseInt(properties[2]),
      hex: properties[3]
    }
    return format
  }

  validateLine (properties, fileName) {
    try {
      if (fileName !== properties[0]) {
        return false
      }
      if (properties[1] === null) {
        return false
      }
      if (!GeneralUtilities.isNumber(properties[2])) {
        return false
      }
      if (!GeneralUtilities.validHexa(properties[3])) {
        return false
      }

      return true
    } catch (e) {
      console.log(e)
    }
  }
}
