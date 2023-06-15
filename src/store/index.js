import {legacy_createStore as createStore} from 'redux'
import reducer from './reducer'

/* 引入reduceer后  方法注入 */
const store =createStore(reducer)

/* 暴露出去 */
export default store
