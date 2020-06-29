import React, { Component } from 'react';

class Third extends Component {
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
            pathname:'/Third',
            state:{
                text:'from Third'
            }
        })
    }
    render(){
        return (
            <div onClick={this.changeRouter}>
                Third
            </div>
        )
    }
}

export default Third;