//提供方法 管理状态 使用匿名函数返回状态

//定义个默认参数
const defaultState={
    inputValue:'sport menu',
    list:[
        'swim',
        'running',
        'jump'
    ]
}

// 俩参数 1是数据源 2是接受的数据
export default(state=defaultState,action)=>{
    console.log(state,action)
    //reducer不能污染数据源，针对特点action进行特化数据驱动
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    return state
}