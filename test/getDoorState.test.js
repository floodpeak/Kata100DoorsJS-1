import {expect} from 'chai'
import getDoorState from '../getDoorState'

describe('100 doors', ()=>{
  it('should be open for #1', ()=>{
    expect(getDoorState(1)).to.be.true
  })
  it('should be closed for #2', ()=>{
    expect(getDoorState(2)).to.be.false
  })
})
