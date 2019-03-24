import React from "react"
import ReactDOM from "react-dom" //To render html into the page.

// ReactDOM.render(<div><h1>Hello</h1><p>This is paragraph</p></div>, document.getElementById("root"))

// ReactDOM.render(<ul>
// 	<li>1.Hello</li>
// 	<li>2.Yes</li>
// 	<li>3.OK</li>
// 	</ul>, document.getElementById("root"))

// function MyApp(){

// 	return (

// 		<ul>
// 		 	<li>1.Hello</li>
// 		 	<li>2.Yes</li>
// 		 	<li>3.NO</li>
// 		</ul>


// 		)
// }

function MyInfo(){

	return (

	<div>	
		<h1 class = "head"> Harsh </h1>
		<p> Hello there !! </p>
		<ul>
			<li> 1.yes </li>
			<li> 2.NO </li>

		</ul>
	</div>

	)

}

ReactDOM.render(<MyInfo />, document.getElementById("root"))