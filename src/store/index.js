import {legacy_createStore as createStore} from 'redux'
import reducer from './reducer'

/* 引入reduceer后  方法注入 */
const store =createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /* 有这个插件就调用 */
    )

/* 暴露出去 */
export default store
