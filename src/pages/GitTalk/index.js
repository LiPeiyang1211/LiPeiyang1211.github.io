import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import React from 'react';
import {Card} from 'antd';

export default class Gitalks extends React.Component {

    componentDidMount(){
        const gitalk = new Gitalk({
            enable: true,
            clientID: '0c131c71d63b0d2734ba',
            clientSecret: '7c9395b8bcff195656207eb2ba12a59961087277',
            repo: 'blogtalk',
            owner: 'LiPeiyang1211',
            admin: 'LiPeiyang1211',
            id: this.props.path,
            distractionFreeMode: false   
        })
        gitalk.render('gitalk-container')
    }

    render(){
        return(
            <Card
                style={{ width: '100%' ,marginTop:20}}
            >
            <div id='gitalk-container'></div>
            </Card>
        )
    }
}
