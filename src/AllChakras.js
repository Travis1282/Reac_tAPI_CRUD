import React, { Component } from 'react'



class AllChakras extends Component {

  render(){

    const allChakras = this.props.allChakras.map((chakra, i) => {
      return <div key={i} onClick={this.props.handleEdit}>{chakra.name} {chakra.color} {chakra.size} {chakra.id} <button id={chakra.id} onClick={this.props.deleteChakra}>delete</button></div>
    })
    return (
        <ul>
          {allChakras}
        </ul>
      )
  }


}


export default AllChakras;


      // id: this.props.edited_chakra.id,
      // name: this.props.edited_chakra.name,
      // color: this.props.edited_chakra.color,
      // size: this.props.edited_chakra.size