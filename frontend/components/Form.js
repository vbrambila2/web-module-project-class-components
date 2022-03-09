import React from 'react'

export default class Form extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  }
  
  onChange = e => {
    const { value, id } = e.target;
    this.props.onChange(id, value);
  }

  render() {
    const { values } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            value={values.todoInput}
            onChange={this.onChange}
            placeholder="add todo"
            id="todoInput"
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
