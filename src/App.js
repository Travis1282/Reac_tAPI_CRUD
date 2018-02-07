import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import AllChackras from './AllChackras';
// import LogChackra from './LogChackra'
// import EditChackra from './EditChackra'

const chackraDB = "localhost:9292/chakras"

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
      .get(chackraDB)
      .end((err, res) => {
          console.log(err, res)
//           const parsedChackras = JSON.parse(res.text);
//           this.setState({allChackras: [...parsedChackras]})
// //           // JSON.parse to get your object out of res.text
      })

  }
//   logChackra = (formData) => {
//     console.log(formData, ' formData')
//     request
//       .post(chackraDB)
//       .send(formData)
//       .set('accept', 'json')
//       .end((err, logChackra) => {
//         console.log(logChackra, ' this should be our response from our post route')
//         const parsedchackra = JSON.parse(logChackra.text)

//         this.setState({allChackras: [parsedchackra, ...this.state.AllChackras ]});
//       })

//   }
//   deletechackra = (e) => {

//     console.log(e.currentTarget.id, ' id of chackra')
//     const id = e.currentTarget.id
//     console.log(id, ' id')
//     request
//       .delete(chackraDB + id)
//       .end((err, deletedchackra) => {
//         console.log(deletedchackra)
//         if(deletedchackra){
//           const filterArray =  this.state.allChackras.filter(chackra => chackra.id != id  )
//           this.setState({allChackras: filterArray})
//         }
//       })
//   }
//   handleEdit = (e) => {
//     console.log(e.currentTarget.children[0].id)
//     const id = e.currentTarget.children[0].id

//     const chackraToEdit = this.state.allChackras.forEach((chackra) => {
//       if(chackra.id === parseInt(id)){
//         this.setState({editedChackras: chackra})
//         return;
//       }
//     })



//   }
//   editCall = (editedchackra) => {
//     console.log(editedchackra)
//     request
//       .put(chackraDB + editedchackra.id)
//       .send(editedchackra)
//       .end((err, chackra) => {
//         console.log(chackra)
//         const parsedchackra = JSON.parse(chackra.text)

//         this.state.allChackras.forEach((chackra, i) => {
//           if(chackra.id === parsedchackra.id){
//           const state = this.state;
//           state.allChackras.splice(i, 1, parsedchackra)
//           this.setState(state)


//           }
//         })

//       })
//   }


        // <logChackra logChackra={this.logChackra}/>
        // {this.state.editedchackra != '' ? <EditChackra  editedchackra={this.state.editedChackras} deletechackra={this.deletechackra} editCall={this.editCall}/> : null}

  render() {


    return (
      <div className="App">
        <AllChackras allChackras={this.state.allChackras}  handleEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default App;










