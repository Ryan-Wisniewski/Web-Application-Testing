import React from 'react'

class Dasboard extends React.Component{
            state = {
                balls: 0,
                strikes: 0,
            }
        strike = () =>{
            // if(strikes < 3){
            //     this.setState({strikes: this.state.strikes + 1})
            // }
            //test ++
            
            let strike = ++this.state.strikes
            console.log(strike,'strike')
                if (strike === 3){
                    this.setState({ balls: 0, strikes: 0 })
            } else {
                this.setState({strikes: strike })
            }
        }
        ball = () =>{
            
            let ball = ++this.state.balls
            console.log(ball,'ball')
                if (ball === 4){
                    this.setState({ balls: 0, strikes: 0})
            } else {
                this.setState({balls: ball })
            }
        }
        foul = () =>{
            
            let foul = ++this.state.strikes
            console.log(foul,'foul')
                if (foul === 3){
                    this.setState({ balls: this.state.balls, strikes: --this.state.strikes})
            } else {
                this.setState({fouls: foul })
            }
        }

        
            
        
    render(){
    return(
        <>
            <h1>{this.state.strikes} : {this.state.balls}</h1>

            <button onClick={this.strike}>Strike</button>
            <button onClick={this.ball}>Ball</button>
            <button onClick={this.foul}>Foul</button>
            {/* <button onClick={this.hit}>Hit</button> */}
        </>
    )}
}

export default Dasboard