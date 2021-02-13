import React from 'react'

class Button extends React.Component{
    constructor(){
        super()          
    }    

    render(){
        return(<button className = {this.props.className} id = {this.props.id} onClick = {() => this.props.addToScreen(this.props.num)}>{this.props.num}</button>)
    }
}

export default Button