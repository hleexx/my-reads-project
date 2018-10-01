import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import ( BrowserRouter ) from 'react-router-dom'


/* To use routing inside of the app */
ReactDOM.render(
	<BrowserRouter>
	<App />
	</BrowserRouter>,
	document.getElementById('root')
)
