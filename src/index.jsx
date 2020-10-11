import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter as Router } from "react-router-dom"

import { ContextProvider } from 'Context/Context'


ReactDOM.render(
	<Router>
		<ContextProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ContextProvider>
	</Router>,
	document.getElementById('root')
)