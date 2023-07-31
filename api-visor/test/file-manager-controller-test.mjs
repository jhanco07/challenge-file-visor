import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index.mjs'
import FileManagerController from '../src/controllers/file-manager-controller.mjs'

chai.use(chaiHttp)
//npm test test/file-manager-controller-test.js
describe('Test FileManagerController.getDataFromFile', () => {
  it('Resultado de servicio', (done) => {
    chai
      .request(app)
      .get('/v1/file?fileName=test6.csv')
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200)
        done()
      })
  })
})

