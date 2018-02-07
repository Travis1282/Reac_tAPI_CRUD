import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import AllChackras from './AllChackras';
import LogChackra from './logChackra'
import Edit from './Edit'

class App extends Component {
  constructor(){
    super();

    this.state = {
      allChackras: [],
      editedChackras: ''
    }
  }
  componentDidMount() {

    request
      .get('//////')
      .end((err, res) => {
          console.log(err, res)
          const parsedChackras = JSON.parse(res.text);
          this.setState({allChackras: [...parsedChackras]})
          // JSON.parse to get your object out of res.text
      })

  }
  logChackra = (formData) => {
    // Where we will make the post request for the new fruit
    console.log(formData, ' formData')
    // superAgent post request
    request
      .post('//////')
      .send(formData)
      .set('accept', 'json')
      .end((err, logChackra) => {
        console.log(logChackra, ' this should be our response from our post route')
        const parsedFruit = JSON.parse(logChackra.text)

        this.setState({allChackras: [parsedFruit, ...this.state.AllChackras ]});
      })

  }
  deleteFruit = (e) => {

    console.log(e.currentTarget.id, ' id of fruit')
    const id = e.currentTarget.id
    console.log(id, ' id')
    request
      .delete('//////' + id)
      .end((err, deletedFruit) => {
        console.log(deletedFruit)
        if(deletedFruit){
          const filterArray =  this.state.AllChackras.filter(fruit => fruit.id != id  )
          this.setState({allChackras: filterArray})
        }
      })
  }
  handleEdit = (e) => {
    console.log(e.currentTarget.children[0].id)
    const id = e.currentTarget.children[0].id



    const fruitToEdit = this.state.AllChackras.forEach((fruit) => {

      if(fruit.id === parseInt(id)){

        this.setState({editedFruit: fruit})
        return;
      }
    })



  }
  editCall = (editedFruit) => {
    console.log(editedFruit)
    request
      .put('http://localhost:9292/fruits/' + editedFruit.id)
      .send(editedFruit)
      .end((err, fruit) => {
        console.log(fruit)
        const parsedFruit = JSON.parse(fruit.text)

        this.state.AllChackras.forEach((fruit, i) => {
          if(fruit.id === parsedFruit.id){
          const state = this.state;
          state.AllChackras.splice(i, 1, parsedFruit)
          this.setState(state)


          }
        })

      })
  }
  render() {


    return (
      <div className="App">
        <AllChackras AllChackras={this.state.AllChackras} deleteFruit={this.deleteFruit} handleEdit={this.handleEdit}/>
        <logChackra logChackra={this.logChackra}/>
        {this.state.editedFruit != '' ? <Edit editedFruit={this.state.editedFruit} editCall={this.editCall}/> : null}
      </div>
    );
  }
}

export default App;
