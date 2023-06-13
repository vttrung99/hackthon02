import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <table className='table1'>
                <span>
                       
                            
                            <a> {this.props.items}</a>
                      
                </span>
           </table>
        
           
    )
  }
}
