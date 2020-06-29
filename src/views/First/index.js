import React, { Component } from 'react';

class First extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }

    componentDidMount(){

    }
    // 跳转
    changeRouter=()=>{
        console.log(this.props);
        this.props.history.push({
            pathname:'/second',
            state:{
                text:'from first'
            }
        })
    }
    render(){
        return (
            <div onClick={this.changeRouter}>
                first
            </div>
        )
    }
}

export default First;