import React, {Component} from "react";
import {Icon} from 'antd';
//用于后期从后台动态生成图片	
const DashboardPng = (mysrc) => (
	
	
	<img src = {require()} style = {{width:"20px",height:"20px"}}/>
	
  
);

class CustomerIcon extends Component{

	constructor (props){

		super(props)
	}

	render(){
		let src = this.props.src
		
		return (
			<Icon component ={DashboardPng} {...this.props} /> 
		)
	}
}

export default CustomerIcon