import React, { Component } from 'react';
import 'antd/dist/reset.css';
import { Input,Button,List} from 'antd';
import Item from 'antd/es/list/Item';

const data=[
    '香菇滑鸡',
    '鱼香肉丝',
    '蒸羊羔'
]

class TodoList extends Component {
    state = {  } 
    render() { 
        return(
            <div>
            {/* 最外层Div加入样式  增加外边距 */}
            <div  style={{margin:'20px'}}>
                <Input 
                placeholder='Free Hug'   
                style={{width:"250px",marginRight:"10px"} } //直接在这边加右边距，省的button写style
                /> 
                <Button type='primary' >增加</Button>
            </div>
            <div 
            style={{maigin:'10px ', width:'300px'}}
            >
                <List
                bordered
                dataSource={data}
                /* ES6语法糖解析  antd规范*/
                renderItem={Item=>(
                    <List.Item>
                            {Item}
                    </List.Item>
                )}
                />
            </div>
            </div>
        )

    }
}
 
export default TodoList;