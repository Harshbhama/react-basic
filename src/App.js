import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"


function App(){
	const fname = "harsh"
	const lname = "bhama"

	const date = new Date()
	const hour = date.getHours()


	const styles = {
		fontSize: 40
	}

	let time

	if(hour<12){
		time = "Good morning"
		styles.color = "blue"
	}
	else if(hour>=12 &&hour<17)
	{
		time = "Good afternoon"
		styles.color = "green"
	}
	else{
		time = "Good night"
		styles.color = "red"
	}


	return(
		<div>

			<h1 style = {styles}> Hello {fname+" "+lname}</h1>
			<h3>{time} {hour}</h3>


		</div>
		)
}

export default App
