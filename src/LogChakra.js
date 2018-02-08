import React, { Component }  from 'react';



class CreateChakra extends Component {
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
    this.props.createChakra(this.state)
  }
  render(){

    return (
        <form>
          <input name="name" placeholder="name" onChange={this.handleInput}/>
          <input name="color" placeholder="color" onChange={this.handleInput}/>
          <input name="amount" placeholder="amount" onChange={this.handleInput}/>
          <button onClick={this.submitForm}>Add Chakra</button>
        </form>

      )
  }
}

export default CreateChakra;
//          <button id={chakra.id} onClick={this.props.deleteChakra}>Delete This Chakra</button>
