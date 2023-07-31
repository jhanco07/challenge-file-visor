/* eslint-disable no-undef */

import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import FileManagerClient from '../src/clients/file-manager-client.mjs'

chai.use(chaiHttp)

describe('Test FileManagerClient.loadFileList', () => {
  it('load file list', (done) => {
    const fileManagerClient = new FileManagerClient()
    fileManagerClient.loadFileList().then((res) => {
      console.log(res)
      expect(res).to.not.be.null
      done()
    })
  })
})

describe('Test FileManagerClient.getDataFromFile', () => {
  it('load data from file', (done) => {
    const fileManagerClient = new FileManagerClient()
    fileManagerClient.getDataFromFile('test6.csv').then((res) => {
      expect(res).to.not.be.null
      done()
    })
  })
})
