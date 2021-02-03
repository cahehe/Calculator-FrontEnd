import React from 'react'

class Button extends React.Component{
    constructor(){
        super()  
        //this.props.addToScreen = this.props.addToScreen.bind(this)      
    }

    render(){
        return(<button onClick = {() => this.props.addToScreen(this.props.num)}>{this.props.num}</button>)
    }
}

export default Button