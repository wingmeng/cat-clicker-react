import React from 'react'
import List from './components/list'
import CatView from './components/cat-view'
import Form from './components/form'

import './App.css'

// 定义根组件
class App extends React.Component {
  // 根级数据（下发给子组件）
  // 数据只能单向下发，或者组件内部自行消化
  state = {
    cats: [
      {
        name: 'Sweet',
        imgUrl: 'cat_picture1.jpg',
        clicks: 0
      }, {
        name: 'Tough',
        imgUrl: 'cat_picture2.jpeg',
        clicks: 0
      }, {
        name: 'Yummy',
        imgUrl: 'cat_picture3.jpeg',
        clicks: 0
      }, {
        name: 'Ghost',
        imgUrl: 'cat_picture4.jpeg',
        clicks: 0
      }, {
        name: 'Flora',
        imgUrl: 'cat_picture5.jpeg',
        clicks: 0
      }
    ],
    catIndex: 0
  }

  // 父组件提前声明好函数或方法作为契约
  // 描述自己的 state 将如何变
  setCatIndex(idx) {
    this.setState({catIndex: idx})
  }

  // 获取当前的猫
  getCurCat = () => this.state.cats[this.state.catIndex]

  // 更新点击数
  updateClicks() {
    let curCat = this.getCurCat();

    // 不要使用 this.state.cat 去获取上一次的 state
    // 而是通过 setState 回调函数的参数值去获取
    this.setState(state => (
      {
        cats: state.cats.map(cat => {
          if (curCat === cat) {
            cat.clicks++
          }

          return cat
        })
      }
    ))
  }

  // 更新当前的猫
  updateCat(data) {
    this.setState(state => ({
      cats: state.cats.map((cat, idx) => idx === this.state.catIndex ? data : cat)
    }))
  }

  // 视图渲染函数
  render() {
    return (
      // 注：class 类名属性要写成 className
      <div className="App">
        {/* 猫的列表 */}
        <List
          items={this.state.cats}
          activeIdx={this.state.catIndex}
          // 子组件通过触发父组件声明好的回调来更新父组件 state
          onItemClick={(idx) => this.setCatIndex(idx)}
        />

        {/* 猫的详情 */}
        <CatView
          cat={this.getCurCat()}
          onCatClick={() => this.updateClicks()}
        />

        {/* 表单 */}
        <Form
          fields={this.getCurCat()}
          onSaveForm={(data) => this.updateCat(data)}
        />
      </div>
    )
  }
}

// 向外导出接口
export default App;
