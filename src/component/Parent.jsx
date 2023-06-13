import React, { Component } from 'react'
import GrandChild from './GrandChild';
export default class Parent extends Component {
  render() {
    let dataProducts = this.props.dataListProducts;
    console.log(this.props.dataListProducts);
    let result= dataProducts.map((item,index)=>{
        return <GrandChild key={index} stt={index} item={item}></GrandChild>
    })
    return (
        <>
        <div>{result}</div>
        </>
    
    )
  }
}
