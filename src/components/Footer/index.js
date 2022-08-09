import React from 'react';
import './index.less';
import {Row} from 'antd';


export default class Footer extends React.Component{
    
    render(){        
        return(
            <Row className='footer'>
                <span>Created ©2022 李佩洋 豫ICP备18019123号</span>
            </Row>
        );
    }
}