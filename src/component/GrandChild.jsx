import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    // let dataItem=this.props.item;
    
    //   console.log("dataItem",dataItem);
    return (
           <table>
                <tbody>
                        <tr>
                            <td> {this.props.stt + 1} </td>
                            <td> {this.props.item}</td>
                            {/* <td> {item.price}</td> */}
                        </tr>
                </tbody>
           </table>
    )
  }
}
