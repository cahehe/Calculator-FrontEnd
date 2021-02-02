import React from 'react'

class Button extends React.Component{
    constructor(){
        super()

        this.addToScreen = this.addToScreen.bind(this)
    }

    addToScreen(){
        console.log(this.props.num + " was clicked!")
    }
    render(){
        return(<button onClick = {this.addToScreen}>{this.props.num}</button>)
    }
}

export default Button