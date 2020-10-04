import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path={ '*' } >
					<Home />
				</Route>
			</Switch>
		</>
	)
}

export default App
