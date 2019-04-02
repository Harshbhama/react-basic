import React from "react"



// function App(){
// 	const fname = "harsh"
// 	const lname = "bhama"
//
// 	const date = new Date()
// 	const hour = date.getHours()
//
//
// 	const styles = {
// 		fontSize: 40
// 	}
//
// 	let time
//
// 	if(hour<12){
// 		time = "Good morning"
// 		styles.color = "blue"
// 	}
// 	else if(hour>=12 &&hour<17)
// 	{
// 		time = "Good afternoon"
// 		styles.color = "green"
// 	}
// 	else{
// 		time = "Good night"
// 		styles.color = "red"
// 	}
//
//
// 	return(
// 		<div>
//
// 			<h1 style = {styles}> Hello {fname+" "+lname}</h1>
// 			<h3>{time} {hour}</h3>
//
//
// 		</div>
// 		)
// }
	class App extends React.Component{

			constructor(){
				super()
				this.state = {
					answer: "yes"
				}
			}
			render() {
				return(

					<div>
						<h1>Is state important to know ? {this.state.answer} </h1>
					</div>
				)
			}

	}

export default App
