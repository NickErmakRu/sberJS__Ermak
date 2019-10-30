import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Provider store={createStore(reducer, [])}>
        <ToDo title="Список задач"/>
      </Provider>
  );
}

// Slomux - реализация Flux, в которой, как следует из нвазвания, что-то сломано.
// Нужно выяснить что здесь сломано



const createStore = (reducer, initialState) => {
  let currentState = initialState
  const listeners = []

  const getState = () => currentState
  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = listener => listeners.push(listener)

  return { getState, dispatch, subscribe }
}

const connect = (mapStateToProps, mapDispatchToProps) =>
    Component => {
      return class extends React.Component {
        render() {
          return (
              <Component
                  {...mapStateToProps(store.getState(), this.props)}
                  {...mapDispatchToProps(store.dispatch, this.props)}
              />
          )
        }

        componentDidMount() {
          store.subscribe(this.handleChange)
        }

        handleChange = () => {
          this.forceUpdate()
        }
      }
    }

class Provider extends React.Component {
  componentWillMount() {
    window.store = this.props.store
  }

  render() {
    return this.props.children
  }
}

// APP

// actions
const ADD_TODO = 'ADD_TODO'

// action creators
const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
})

// reducers
const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      state.push(action.payload)
      return state
    default:
      return state
  }
}

const store = createStore(reducer, []);

// components
class ToDoComponent extends React.Component {
  state = {
    todoText: ''
  }

  render() {
    return (
        <div>
          <label>{this.props.title || 'Без названия'}</label>
          <div>
            <input
                value={this.state.todoText}
                placeholder="Название задачи"
                onChange={this.updateText}
            />
            <button onClick={this.addTodo}>Добавить</button>
            <ul>
              {this.props.todos.map((todo, idx) => <li>{todo}</li>)}
            </ul>
          </div>
        </div>
    )
  }

  updateText = (e) => {
    const { value } = e.target

    this.setState({todoText: value});
  }

  addTodo = () => {
    this.props.addTodo(this.state.todoText)

    this.setState({todoText: ''});
  }
}

const ToDo = connect(state => ({
  todos: state,
}), dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
}))(ToDoComponent)


export default App;
