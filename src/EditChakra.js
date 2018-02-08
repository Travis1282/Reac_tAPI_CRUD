import React, {Component} from 'react';


class EditChakra extends Component {
    constructor(props){
    super(props)

    this.state = {
      id: this.props.edited_chakra.id,
      name: this.props.edited_chakra.name,
      color: this.props.edited_chakra.color,
      size: this.props.edited_chakra.size
    }
  }
  handleInput = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.editChackra(this.state)
  }
  render(){
    return (
         <form>
          Name: <input name="name" value={this.state.name} onChange={this.handleInput}/>
          Color:  <input name="color" value={this.state.color}  onChange={this.handleInput}/>
          Size:<input name="size" value={this.state.amount}  onChange={this.handleInput}/>
          <button onClick={this.submitForm}>Add Chakra</button>
        </form>

      )
  }
}


export default EditChakra;
