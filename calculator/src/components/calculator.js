import React from 'react'
import Button from './button'
import axios from 'axios'
import './calculator.css'

class Calculator extends React.Component{
    constructor(){
        super()
        this.state = ({
            screen : "",
            urlParam: ""
        })

        this.addToScreen = this.addToScreen.bind(this)     
        this.clearScreen = this.clearScreen.bind(this)   
        this.calculate = this.calculate.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
    }

    addToScreen = (newChar) => {        
        
        this.setState(prevState => {   
            let operation = newChar === '+'? "%2B" : newChar
            if(prevState.urlParam !== "")         
                return{
                    screen:     `${prevState.screen}` + newChar,
                    urlParam:   `${prevState.urlParam}` + operation
                }           
            else
                return{
                    screen:     `${newChar}`,
                    urlParam:   `${operation}`
                }
        })                
    }

    clearScreen(prop){

        this.setState((prevState, props) => {            
            return{
                screen:     "",
                urlParam:   ""
            }
        })        
    }

    calculate(){
        let url = `http://localhost:8080/api/calculate?expression=` //http://calculator.api.carloshehe.com:8080/api/calculate?expression=`
        axios.get(`${url}` + `${this.state.urlParam}`).then(response =>{            
            this.setState((prevState, props) => {
                return{
                    screen: response.data,
                    urlParam: ""
                }
            })
        })
        
    }

    sendRequest(){
        if(this.componentDidUpdate)
            this.calculate()
    }

    componentDidUpdate(prevProp, prevState){
        if(this.state.screen !== "")
            return true
    }


    render(){
        return(            
            <div className = "calculator">
                <h1 id = "screen">{this.state.screen}</h1>

                
                <div className = "buttons">
                    <Button num = {'C'} addToScreen = {this.clearScreen}/>
                    <Button num = {'('} addToScreen = {this.addToScreen}/>
                    <Button num = {')'} addToScreen = {this.addToScreen}/>
                    <Button id = "rightSide" num = {'/'} addToScreen = {this.addToScreen}/>
                    
                    <Button num = {7} addToScreen = {this.addToScreen}/>
                    <Button num = {8} addToScreen = {this.addToScreen}/>
                    <Button num = {9} addToScreen = {this.addToScreen}/>
                    <Button id = "rightSide" num = {'*'} addToScreen = {this.addToScreen}/>

                    <Button num = {4} addToScreen = {this.addToScreen}/>
                    <Button num = {5} addToScreen = {this.addToScreen}/>                
                    <Button num = {6} addToScreen = {this.addToScreen}/>
                    <Button id = "rightSide" num = {'-'} addToScreen = {this.addToScreen}/>                

                    <Button num = {1} addToScreen = {this.addToScreen}/>
                    <Button num = {2} addToScreen = {this.addToScreen}/>
                    <Button num = {3} addToScreen = {this.addToScreen}/>                    
                    <Button id = "rightSide" num = {'+'} addToScreen = {this.addToScreen}/> 

                    <Button num = {0} addToScreen = {this.addToScreen}/>
                    <Button num = {'.'} addToScreen = {this.addToScreen}/>
                    
                                    
                                
                    
                    <Button id = "equals" num = {'='} addToScreen = {this.calculate}/>                
                </div>
            </div>)
    }
}

export default Calculator