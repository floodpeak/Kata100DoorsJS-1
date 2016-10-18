import {expect} from 'chai'
import getDoorState from '../getDoorState'

describe('100 doors', ()=>{
  it('should be open for #1', ()=>{
    expect(getDoorState(1)).to.be.true
  })
})
