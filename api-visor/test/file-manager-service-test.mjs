import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index.mjs'
import FileManagerService from '../src/services/file-manager-service.mjs'

chai.use(chaiHttp)

describe('Test FileManagerService.getFilesList', () => {
    it('load file list', (done) => {
      const fileManagerService = new FileManagerService()
      fileManagerService.getFilesList().then((res) => {
        expect(res).to.not.be.null;
        done();
      })
    })
  })

  describe('Test FileManagerService.getFilesList', () => {
    it('load file list', (done) => {
      const fileManagerService = new FileManagerService()
      fileManagerService.getDataFromFile('test6.csv').then((res) => {
        expect(res).to.not.be.null;
        done();
      })
    })
  })




