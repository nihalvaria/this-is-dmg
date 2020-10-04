import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path={ '*' } >
					{/* { Home Component } */}
				</Route>
			</Switch>
		</>
	)
}

export default App
