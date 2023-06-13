import React, { Component } from 'react'

export default class Child extends Component {
    constructor() {
        super()
        this.state={
            listData:[]
        }
    }
    handleChange=(event)=>{
         
        this.setState({
            listData:event.target.value,
        })
    }
    handleClick=()=>{
       
        this.props.listInfor(this.state.listData)
    }
  render() {
    return (
      <>
      <input type="text" onChange={this.handleChange} />
      <button onClick={this.handleClick}> Them  </button>
      </>
    )
  }
}
