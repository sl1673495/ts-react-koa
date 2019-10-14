import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from '../routes'

export default () => {
	return (
	 <BrowserRouter basename="/">
     <Routes />
   </BrowserRouter>
	)
}
