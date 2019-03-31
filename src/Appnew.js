import React from "react"
import ReactDOM from "react-dom"


class Appnew extends React.Component{

    render(){
        return(

          <div>
              <Header
              username = "harsh"
              />
              <Greetings />

          </div>

        )
    }
}

class Header extends React.Component{

  render(){
      return(

          <div>
              <p>Welcome, {this.props.username}! </p>
          </div>

      )

  }
}
class Greetings extends React.Component{
  render(){
      const date = new Date();
      const hours = date.getHours();
      let time
      if (hours>12 && hours <17){
        time = "Good afternoon"
      }
      else if (hours<12){
        time = "Good morning"
      }
      else{
        time = "Good evening"
      }
      return(

        <div>
          <h1>{time} to you sir or madam</h1>
        </div>
      )
  }
}





export default Appnew
