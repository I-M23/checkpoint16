import { Component } from "react";
import Profile from "./Profile";



export default class App extends Component {

  state = {
    Person:{
      fullName:"Imen",
      bio:"this is the bio part",
      profession:"teacher",
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQus8-k0H_fHXXO_pGxJ7hMIiNcHbRpX1Cl3c2cGsu7dp_5LSf_xtX2Ycuh5fTARk8SkjU&usqp=CAU"
    },
    shows: true,
    
  }
handelShow =()=>{
    this.setState ({
      shows : !this.state.shows
    }) 
  }

  

  render(){
    return (
      <div>
        <div style= {{display:"flex", flexDirection:"column", alignItems:"center"}} >
        {(this.state.shows) ? <div>
        <img src={this.state.Person.imgSrc} 
             alt= "profile" 
            style={{borderRadius:"150px" , width:"200px" , height:"100px" }}/>
        <h1> {this.state.Person.fullName} </h1>
        <h3> {this.state.Person.bio} </h3>
        <h3> {this.state.Person.profession} </h3>
        </div> : null
        } 
       
      </div>
        {this.state.shows && <Profile/>} 
         <button onClick={()=>this.handelShow()}>click</button>
      </div>
    )

  }
  
  
}


    
  


