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

export default(state=defaultState,action)=>{
    return state
}