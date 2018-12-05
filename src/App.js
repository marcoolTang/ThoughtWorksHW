import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
}from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store/store.js';
// import PrivateRoute from './components/privateroute/privateroute'; // 导入PriveteRoute组件
import Login from './components/login/login'; // 导入login组件
import Home from './components/home/home'; // 导入home组件



class App extends Component {
	render() {
		return (

			<Provider	 store = {store}>
				<Router>
		            <Switch>
		     
	                    <Route exact path="/" component={Login}/>
		                <Route path="/home" component = {Home} />   
		              	
		            </Switch>
	   			 </Router>
	   		</Provider>		 

			);
	
		}
	}	
export default App;