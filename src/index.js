
import 'babel-polyfill'; // 转译es对象 env转译es6语法 它转译es6对象

import './app'
// import './style/style2.css'; // 引入css
// import './style/style.less'; // 引入less
// import './style/style3.scss'; // 引入less
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';


// if (module.hot) {
//     // 实现热更新
//     module.hot.accept();
// }

ReactDom.render(getRouter(), document.getElementById('root'));

