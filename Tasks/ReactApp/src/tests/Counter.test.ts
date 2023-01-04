import * as reduxHooks from 'react-redux'
import * as actions from '../action/action'

jest.mock('react-redux')

const mokedDispatch = jest.spyOn(reduxHooks, "useDispatch")

describe('Home', () => { 
  
    it('should be dispatch actions',()=>{
        const mockedUpdateCountAction = jest.spyOn(actions, 'updateCountAction')
        expect(mockedUpdateCountAction).toHaveBeenCalled
    })
    
 })