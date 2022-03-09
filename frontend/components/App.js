import React from 'react';
import Form from './Form';

let idx = 0
const getIdx = () => ++idx

const list = [
  { id: getIdx(), task: 'work on car', completed: false }
]

const initialState = {
  list,
  todo: {
    todoInput: ''
  }
};

export default class App extends React.Component {
  state = initialState;

  addTodo = () => {
    const { list, todo: { todoInput } } = this.state
    const newTask = { id: getIdx(), task: todoInput, completed: false }
    this.setState({
      ...this.state,
      todo: initialState.todo,
      list: [...list, newTask],
    })
  }

  destroy = id => {
    console.log('clicking to destroy the following id!', id)
    this.setState({
      ...this.state, list: this.state.list.filter(item => item.id !== id)
    })
  }

  checkComplete = id => {
    this.setState({
      ...this.state, list: this.state.list.map(item => {
        return item.id === id
        ? { ...item, completed: !item.completed }
        : item
      })
    })
  }

  changeInput = (key, value) => {
    this.setState({ 
      ...this.state, 
      todo: { ...this.state.todo, [key]: value }
    })
  }
  
  render() {
    const { list, todo } = this.state;

    return (
      <div>
        Todo List:
        <ul>
          {
            list.map(item => {
              const { id, task, completed } = item
              return (
                <li key={id}>
                  {task}
                  <button onClick={() => this.checkComplete(id)} >{ completed ? 'complete! good job' : 'not complete' }</button>
                  <button onClick={() => this.destroy(id)}>remove</button>
                </li>
              )
            })
          }
        </ul>
        <Form onChange={this.changeInput} onSubmit={this.addTodo} values={todo} />
      </div>
    )
  }
}

// destroy = id => {
//   console.log('clicking to destroy the following id!', id)
//   this.setState({
//     ...this.state, quotes: this.state.quotes.filter(quote => quote.id !== id)
//   })
// }

// capitalizeAuthor = id => {
//   this.setState({
//     ...this.state, quotes: this.state.quotes.map(quote => {
//       return quote.id === id
//         ? { ...quote, author: quote.author.toUpperCase() }
//         : quote
//     })
//   })
// }
