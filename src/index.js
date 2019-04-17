import React from 'react'  // 解析、编译器
import ReactDOM from 'react-dom'  // 渲染到 DOM 的库
import App from './App'  // 根组件
import './index.css'  // 样式文件

// 渲染到 DOM 中
ReactDOM.render(<App />, document.getElementById('root'));
