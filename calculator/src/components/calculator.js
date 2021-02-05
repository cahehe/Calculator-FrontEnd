import React from 'react'
import Button from './button'
import axios from 'axios'

class Calculator extends React.Component{
    constructor(){
        super()
        this.state = ({
            screen : ""
        })

        this.addToScreen = this.addToScreen.bind(this)     
        this.clearScreen = this.clearScreen.bind(this)   
        this.calculate = this.calculate.bind(this)
    }

    addToScreen = (newChar) => {        
        
        this.setState(prevState => {            
            return{
                screen: prevState.screen + newChar
            }            
        })                
    }

    clearScreen(prop){

        this.setState((prevState, props) => {
            return{
                screen: ""
            }
        })
    }

    calculate(){
        axios.get("http://localhost:8080/").then(response =>{
            console.log(response.data)
        })
        
    }


    render(){
        return(            
            <div>
                {this.state.screen}
            
                <Button num = {1} addToScreen = {this.addToScreen}/>
                <Button num = {2} addToScreen = {this.addToScreen}/>
                <Button num = {3} addToScreen = {this.addToScreen}/>
                <Button num = {4} addToScreen = {this.addToScreen}/>
                <Button num = {5} addToScreen = {this.addToScreen}/>
                <Button num = {7} addToScreen = {this.addToScreen}/>
                <Button num = {6} addToScreen = {this.addToScreen}/>
                <Button num = {8} addToScreen = {this.addToScreen}/>
                <Button num = {9} addToScreen = {this.addToScreen}/>
                <Button num = {0} addToScreen = {this.addToScreen}/>

                <Button num = {'x'} addToScreen = {this.addToScreen}/>
                <Button num = {'/'} addToScreen = {this.addToScreen}/>
                <Button num = {'+'} addToScreen = {this.addToScreen}/>
                <Button num = {'-'} addToScreen = {this.addToScreen}/>

                <Button num = {'Clear'} addToScreen = {this.clearScreen}/>
                <Button num = {'='} addToScreen = {this.calculate}/>
            
            </div>)
    }
}

export default Calculator