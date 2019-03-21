import React, { Component } from 'react';
import List from './components/list';
import CatView from './components/cat-view';
import Form from './components/form';

import './App.css';

class App extends Component {
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

  setCurCat(idx) {
    this.setState({catIndex: idx})
  }

  getCurCat = () => this.state.cats[this.state.catIndex]

  updateClicks() {
    this.setState((state) => {
      return state.cats.map((item, idx) => {
        if (idx === this.state.catIndex) {
          item.clicks++
        }

        return item
      })
    })
  }

  updateCat(data) {
    this.setState((state) => {
      return state.cats.map((item, idx) => {
        if (idx === this.state.catIndex) {
          for (let key in item) {
            item[key] = data[key]
          }
        }

        return item
      })
    })
  }

  toggleForm() {
    this.setState((state) => (
      {isAdminMode: !state.isAdminMode}
    ))
  }

  render() {
    return (
      <div className="App">
        <List className="cat-list"
          items={this.state.cats}
          activeItem={this.state.catIndex}
          onItemClick={(idx) => this.setCurCat(idx)}
        />
        <CatView
          cat={this.getCurCat()}
          onCatClick={() => this.updateClicks()}
        />
        <Form
          data={this.getCurCat()}
          onSave={(data) => this.updateCat(data)}
          toggleForm={() => this.toggleForm()}
        />
      </div>
    );
  }
}

export default App;
