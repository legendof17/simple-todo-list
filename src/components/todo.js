import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            items: [{
                text : 'Hello',
                id : Date.now()
            },
            {
                text : 'World',
                id : Date.now()
            }]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearTodoList = this.clearTodoList.bind(this)
    }

    handleChange(event) {
        this.setState({ 
            text : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        if(this.state.text.length === 0) return

        const newTodo = {
            text : this.state.text,
            id : Date.now()
        }

        this.setState(state => ({
            items : state.items.concat(newTodo),
            text : ''
        }))
    }

    clearTodoList(event) {
        event.preventDefault()
        this.setState({
            items : []
        })
    }

    render() {
        return (
            <div>
                <h1>TODO APP</h1>
                <div>
                   <TodoList item={this.state.items} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id">Input Action:</label><br />
                    <input id="id" onChange={this.handleChange} value={this.state.text} /><br />
                    <button>Add</button>{'  '}
                    <button onClick={this.clearTodoList}>Clear</button>
                </form>
            </div>
        )
    }
}

class TodoList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.item.map(
                    item => (
                        <li key={item.id}>{item.text}</li>
                    )
                )}
            </ul>
        )
    }
}

export default Todo
