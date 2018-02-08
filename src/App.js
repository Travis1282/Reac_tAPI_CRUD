import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import AllChakras from './AllChakras';
import LogChakra from './LogChakra'
import EditChakra from './EditChakra'

const chakraDB = "http://localhost:9292/chakras"

class App extends Component {
  constructor() {
    super();

    this.state = {
      allChakras: [],
      editedChakra: ''
    }
  }
  componentDidMount() {
    request
      .get(chakraDB)
      .end((err, res) => {
          console.log(err, res)
          const parsedChakras = JSON.parse(res.text);
          this.setState({allChakras: [...parsedChakras]})
//           // JSON.parse to get your object out of res.text
      })

  }
  log_chakra = (formData) => {
    console.log(formData, ' formData')
    request
      .post(chakraDB)
      .send(formData)
      .set('accept', 'json')
      .end((err, log_chakra) => {
        console.log(log_chakra, ' this should be our response from our post route')
        const parsedchakra = JSON.parse(log_chakra.text)

        this.setState({allChakras: [parsedchakra, ...this.state.AllChakras ]});
      })

  }
  deleteChakra = (e) => {

    console.log(e.currentTarget.id, ' id of chakra')
    const id = e.currentTarget.id
    console.log(id, ' id')
    request
      .delete(chakraDB + id)
      .end((err, deletedchakra) => {
        console.log(deletedchakra)
        if(deletedchakra){
          const filterArray =  this.state.allChakras.filter(chakra => chakra.id != id  )
          this.setState({allChakras: filterArray})
        }
      })
  }
  handleEdit = (e) => {
    console.log(e.currentTarget.children[0].id)
    const id = e.currentTarget.children[0].id
    const chakraToEdit = this.state.allChakras.forEach((chakra) => {
      if(chakra.id === parseInt(id)){
        this.setState({editedChakra: chakra})
        return;
      }
    })



  }
  editChackra = (edited_chakra) => {
    console.log(edited_chakra)
    request
      .put(chakraDB + edited_chakra.id)
      .send(edited_chakra)
      .end((err, chakra) => {
        console.log(chakra)
        const parsedchakra = JSON.parse(chakra.text)

        this.state.allChakras.forEach((chakra, i) => {
          if(chakra.id === parsedchakra.id){
          const state = this.state;
          state.allChakras.splice(i, 1, parsedchakra)
          this.setState(state)
          }
        })

      })
  }
     
  render() {


    return (
      <div className="App">
        <AllChakras allChakras={this.state.allChakras}  handleEdit={this.handleEdit}/>
          <LogChakra log_chakra={this.log_chakra}/>
         {this.state.editedchakra != '' ? <EditChakra  editedChakra={this.state.editedChakra} editChakra={this.editChakra} deletechakra={this.deletechakra} /> : null}

      </div>
    );
  }
}

export default App;










