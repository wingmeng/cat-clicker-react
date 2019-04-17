import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  // 内部的状态，对主业务逻辑无影响
  state = {
    isFormShow: false,
    fields: this.props.fields
  }

  // 生命周期：接收到新 props
  componentWillReceiveProps(nextProps) {
    if (nextProps.fields !== this.state.fields) {
      this.setState({fields: nextProps.fields})
    }
  }

  // 切换表单可见
  toggleForm() {
    this.resetForm()
    this.setState(state => (
      {isFormShow: !state.isFormShow}
    ))
  }

  // 表单项 value 变化
  onFieldChange(el) {
    let value = el.value;
    let name = el.name;

    if (name === 'clicks') {
      value = parseInt(value, 10)
    }

    this.setState(state => {
      let temp = {};

      for (let key in state.fields) {
        temp[key] = key === name ? value : state.fields[key]
      }

      return { fields: temp }
    })
  }

  // 还原表单赋值
  resetForm() {
    this.setState({fields: this.props.fields})
  }

  // 取消
  onCancel() {
    this.resetForm()
    this.setState({isFormShow: false})
  }

  // 保存
  onSave() {
    // 传递表单值（组件 state.fields 的值）
    this.props.onSaveForm(this.state.fields)
  }

  render() {
    let { name, clicks, imgUrl } = this.state.fields;

    return (
      <div>
        <p>
          <button
            className="btn-admin"
            onClick={() => this.toggleForm()}
          >Admin</button>
        </p>
        <div className="form" style={
            {display: this.state.isFormShow ? 'block' : 'none'}
          }>
          <p>
            {/* 受控表单 */}
            <label>Name:</label>
            <input type="text" name="name"
              value={name}
              // 不加 onChange 的话，文本框是只读的
              onChange={e => this.onFieldChange(e.target)}
            />
          </p>
          <p>
            <label>ImgURL:</label>
            <input type="text" name="imgUrl"
              value={`images/${imgUrl}`}
              onChange={(e) => this.onFieldChange(e.target)}
            />
          </p>
          <p>
            <label>Clicks:</label>
            <input type="text" name="clicks"
              value={clicks}
              onChange={(e) => this.onFieldChange(e.target)}
            />
          </p>
          <p className="btn-group">
            <button onClick={() => this.onCancel()}>Cancel</button>{' '}
            <button onClick={() => this.onSave()}>Save</button>
          </p>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
  fields: PropTypes.shape({
    name: PropTypes.string,
    clicks: PropTypes.number,
    imgUrl: PropTypes.string
  }),
  onSaveForm: PropTypes.func
}

export default Form;
