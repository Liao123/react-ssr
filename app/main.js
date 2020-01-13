import React from 'react'
import {render} from 'react-dom'
import './style/index.scss';
import logo from './static/google.png'

function App(){
    return <div><img src={logo} />Hello React</div>
}
render(<App />, document.getElementById('app'));