import React, {Component} from 'react';


class EditChackra extends Component {
    constructor(props){
    super(props)

    this.state = {
      //id: this.props.editedChackra.id,
      // name: this.props.editedChackra.name,
      // color: this.props.editedChackra.color,
      // size: this.props.editedChackra.size
    }
  }
  handleInput = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.editCall(this.state)
  }
  render(){
    return (
         <form>
          Name: <input name="name" value={this.state.name} onChange={this.handleInput}/>
          Color:  <input name="color" value={this.state.color}  onChange={this.handleInput}/>
          Size:<input name="size" value={this.state.amount}  onChange={this.handleInput}/>
          <button onClick={this.submitForm}>Add Chackra</button>
        </form>

      )
  }
}


export default EditChackra;
