import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index.mjs'
import GeneralUtilities from '../src/utils/general-utilities.mjs'

chai.use(chaiHttp)

describe('Test GeneralUtilities.sortArrayByNumber', () => {
  const array = ['errorrrrr', 'test1.csv', 'test2.csv', 'test3.csv', 'test18.csv', 'test4.csv',
    'test5.csv', 'test6.csv', 'file.csv', 'error.csv', 'test9.csv', 'test15.csv']

  it('load file list', (done) => {
    const res = GeneralUtilities.sortStringsByNumber(array)
    console.log(res)
    expect(res).to.not.be.null
    done()
  })
})
