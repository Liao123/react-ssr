
import 'babel-polyfill'; // 转译es对象 env转译es6语法 它转译es6对象

// import './style/style2.css'; // 引入css
import './style/style.less'; // 引入less
import './style/style3.scss'; // 引入less

if (module.hot) {
    // 实现热更新
    module.hot.accept();
}

alert(1);
