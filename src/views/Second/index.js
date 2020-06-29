import React, { Component } from 'react';

class Second extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }

    componentDidMount(){

    }
    // 跳转
    changeRouter=()=>{
        this.props.history.push({
            pathname:'/second',
            state:{
                text:'from Second'
            }
        })
    }
    render(){
        return (
            <div onClick={this.changeRouter}>
                Second
            </div>
        )
    }
}

export default Second;