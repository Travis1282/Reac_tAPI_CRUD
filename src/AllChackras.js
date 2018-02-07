import React, { Component } from 'react'



class AllChackras extends Component {

  render(){

    const allChackras = this.props.allChackras.map((chackra, i) => {
      return <li key={i} > {chackra.name} 
              <div onClick={this.props.handleEdit}>{chackra.name}</div></li>
    })
    console.log(this.props, allChackras)
    return (
        <ul>
          {allChackras}
        </ul>
      )
  }


}


export default AllChackras;
