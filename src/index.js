import React from "react"
import ReactDOM from "react-dom" //To render html into the page.
// import MyInfo from "./components/MyInfo"

import App from "./App"
import styles from './index.css';


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


// ReactDOM.render(<MyInfo />, document.getElementById("root"))


ReactDOM.render(<App />, document.getElementById("root"))
