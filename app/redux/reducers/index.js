import home from './home'
import list from './list'
import { combineReducers } from 'redux' ;

// 到出合并的reducers对象
export default combineReducers({
    home,
    list
})