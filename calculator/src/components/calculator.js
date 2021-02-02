import React from 'react'
import Button from './button'

class Calculator extends React.Component{
    constructor(){
        super()
        this.state = ({
            screen : "Blank"
        })
    }
    render(){
        return(            
            <div>
                {this.state.screen}
            
                <Button num = {1}/>
                <Button num = {2}/>
                <Button num = {3}/>
                <Button num = {4}/>
                <Button num = {5}/>
                <Button num = {6}/>
                <Button num = {7}/>
                <Button num = {8}/>
                <Button num = {9}/>
                <Button num = {0}/>
            
            </div>)
    }
}

export default Calculator