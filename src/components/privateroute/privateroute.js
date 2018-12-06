import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { isAuthenticated } from '../../utils/utils.js'


const PrivateRoute = ({componet: Component, ...rest}) => (
	<Route {...rest} render = {(props) =>(
		!!isAuthenticated()?
		<Component {...props} />:
		<Redirect to = {{
			pathname :'/login',
			state: {from:props.location}
		}}/>
	)}/>	

)
export default PrivateRoute