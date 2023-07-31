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

  describe('Test FileManagerService.loadAllData()', () => {
    it('load file list', (done) => {
      const fileManagerService = new FileManagerService()
      fileManagerService.loadAllData().then((res) => {
        console.log(res)
        expect(res).to.not.be.null;
        done();
      })
    })
  }) 

  describe('Test FileManagerService.validateLine', () => {
    it('validate line', (done) => { 
        const fileManagerService = new FileManagerService()
        var lines= "test9.csv,gLMhwlFUjDGHt,57993494542303527136947038102435,a2bc693e543e568bbf1c24c23c909ec8";
        const properties = lines.split(",");
        var res =fileManagerService.validateLine(properties,"test9.csv")
        console.log(res)
        expect(res).equal(true);
        done();
    })
  })





