import React, { Component } from 'react';
import 'antd/dist/reset.css';
import { Input, Button, List } from 'antd';
import Item from 'antd/es/list/Item';
import store from './store';//wewbpack会默认补上index.js 其他的名字要指定

// const data=[
//     '香菇滑鸡',
//     '鱼香肉丝',
//     '蒸羊羔'
// ]

class TodoList extends Component {
    /* constructor构造函数，需要传一个propscan参数 */
    constructor(props) {
        super((props))
        //console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
    }
    render() {
        return (
            <div>
                {/* 最外层Div加入样式  增加外边距 */}
                <div style={{ margin: '20px' }}>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: "250px", marginRight: "10px" }} //直接在这边加右边距，省的button写style
                        onChange={this.changeInputValue}
                    />
                    <Button type='primary' >增加</Button>
                </div>
                <div
                    style={{ maigin: '10px ', width: '300px' }}
                >
                    <List
                        bordered /* 加这个会好看点，有外边框 */
                        dataSource={this.state.list}
                        /* ES6语法糖解析  antd规范*/
                        renderItem={Item => (
                            <List.Item>
                                {Item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )

    }

    changeInputValue(el){
        const action={
            type:'changeInput', /* 命名，如果提示波浪线 一般都是：没写或者写成=了 */
            value:el.target.value
        }
        /* 建立好之后 需要通过dispatch联系发送   */
        store.dispatch(action)
    }
}

export default TodoList;