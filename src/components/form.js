import React from 'react';

class Form extends React.Component {
  state = {
    isFormShow: false,
    fields: this.props.data
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.fields) {
      this.setState({fields: nextProps.data});
    }
  }

  update(el, tag) {
    let value = el.value;

    this.setState((state) => {
      let temp = {};
      let oldFields = state.fields;

      for (let key in oldFields) {
        temp[key] = tag === key ? value : oldFields[key]
      }

      return {fields: temp}
    })
  }

  toggleForm(wantTo) {
    this.setState((state) => {
      switch(wantTo) {
        case 'show':
          return {isFormShow: true}
        case 'hide':
          return {isFormShow: false}
        default:
          return {isFormShow: !state.isFormShow}
      }
    })
  }

  onCancel() {
    this.setState({fields: this.props.data});
    this.toggleForm('hide');
  }

  onSave() {
    const handle = this.props.onSave;
    handle && handle(this.state.fields);
  }

  render() {
    let { isFormShow, fields } = this.state;

    return (
      <div>
        <p>
          <button className="btn-admin"
            onClick={() => this.toggleForm()}
          >Admin</button>
        </p>
        <div className="form" style={{display: isFormShow ? 'block' : '' }}>
          <p>
            <label>Name: </label>
            <input type="text" value={fields.name}
              onChange={(event) => this.update(event.target, 'name')}
            />
          </p>
          <p>
            <label>ImgURL: </label>
            <input type="text" value={fields.imgUrl}
              onChange={(event) => this.update(event.target, 'imgUrl')}
            />
          </p>
          <p>
            <label>Clicks: </label>
            <input type="text" value={fields.clicks}
              onChange={(event) => this.update(event.target, 'clicks')}
            />
          </p>
          <p className="btn-group">
            <button className="btn-cancel"
              onClick={() => this.onCancel()}
            >Cancel</button>{' '}
            <button className="btn-save"
              onClick={() => this.onSave()}
            >Save</button>
          </p>
        </div>
      </div>
    )
  }
}

export default Form;
