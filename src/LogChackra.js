import React, { Component }  from 'react';



class CreateChackra extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      color: '',
      amount: ''
    }
  }
  handleInput = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  submitForm = (e) => {
    e.preventDefault();
    //
    this.props.createChackra(this.state)
  }
  render(){

    return (
        <form>
          <input name="name" placeholder="name" onChange={this.handleInput}/>
          <input name="color" placeholder="color" onChange={this.handleInput}/>
          <input name="amount" placeholder="amount" onChange={this.handleInput}/>
          <button onClick={this.submitForm}>Add Chackra</button>
        </form>

      )
  }
}

export default CreateChackra;
//          <button id={chackra.id} onClick={this.props.deleteChackra}>Delete This Chackra</button>
