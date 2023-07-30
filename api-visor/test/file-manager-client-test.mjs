import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index.mjs'
import FileManagerClient from '../src/clients/file-manager-client.mjs'

chai.use(chaiHttp)

describe('Pruebas de saludo', () => {
  it('Resultado de servicio', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        // expect(res.text).to.equal('Hola Mundo');
        done()
      })
  })
})

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

describe('Test FileManagerClient.getdataFromFile', () => {
  it('load data from file', (done) => {
    const fileManagerClient = new FileManagerClient()
    fileManagerClient.getDataFromFile('test6.csv').then((res) => {
      expect(res).to.not.be.null
    })
    done()
  })
})
