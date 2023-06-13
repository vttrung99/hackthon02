import React, { Component } from 'react'
import Child from './component/Child';
import Parent from './component/Parent';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      list:[],
      
    }
  }

  getData=(keyList)=>{
    console.log("keyList",keyList);
    this.setState({
      list:[...this.state.list,keyList]
    })}
  render() {
    

    return (
      <>
      <Child listInfor={this.getData}>
      </Child>
      <Parent dataListProducts={this.state.list}></Parent>
      </>
    )
  }
}
