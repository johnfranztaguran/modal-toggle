import React from 'react';
import shortid from 'shortid';

class TodoForm extends React.Component {
    state = { 
        text: ''
     }

     handleChange = (event) => {
         console.log(event)
         this.setState({
             [event.target.name]: event.target.value
         })
     }

     handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ''
        })
     }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder="todo..."
                value={this.state.text}
                onChange={e => this.handleChange(e)}
                name="text"
                />
                <button onClick={this.handleSubmit}>add todo</button>
            </form>
         );
    }
}
 
export default TodoForm;