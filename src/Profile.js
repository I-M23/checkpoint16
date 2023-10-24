import React, { Component} from 'react'

export default class Profile extends Component {

    state={
        count : 0,
        intervall : 0
    }
    componentDidMount(){
        this.setState({
          intervall: setInterval(()=>{
            this.setState({
              count : this.state.count+1
            })
          } ,1000)
        })
      }
    
      componentWillUnmount(){
       clearInterval(this.state.intervall)
    
      }
    
      componentDidUpdate(){
        console.log(this.state.count);
      }

    render(){
        return (
            <div>
             <h3> Interval Time : {this.state.count} </h3>
            </div>
        )
    }
}