import React, {Component} from 'react';
import {Icon,Input} from 'antd';
import './catalog.scss';
import centos from '../../assets/cent_os.png';
import suse from '../../assets/suse.png';
import windows from '../../assets/windows.png';
import ubuntu from '../../assets/ubuntu.png';
import debian from '../../assets/debin.png';





const imgSrc = {
	'debian':debian,
	'centos':centos,
	'suse':suse,
	'windows':windows,
	'ubuntu':ubuntu,
}


class Catalog extends Component {

	constructor(props){
		super(props)
		console.log(this.props.rawData)
		this.state = {
			isshown:false,
			isclearcontent:false,
			inputvalue:'',
		}


	}

	_open = (e) => {
		this.setState({
			isshown:true
		})
	}
	_close = (e)=>{
		this.setState({
			isshown:false
		})
	}
	_cancle =(e) => {
		console.log(1)
		this.setState({
			isclearcontent:true
		},function(){
			console.log(this.state.isclearcontent)
		})

	}	
	_inputFun = (e) =>{
		this.setState({
			isclearcontent:false,
			inputvalue:e.target.value
		})
	}
	render () {
		let {name} = this.props.rawData;
		let {location} = this.props.rawData;
		let {os} = this.props.rawData;
		let {ip} = this.props.rawData;
		let {resources} = this.props.rawData;
		let {status} = this.props.rawData;
		let {type} = this.props.rawData;

		let imgpath = ''
		for (let key in imgSrc){
			if(os == key){
				imgpath =imgSrc[key]
			}
		}


		return (

			<div className = "content-container">

				<div className = 'img-container'>	
				 	<img src = {imgpath}/>
				</div>

				<div className = 'right-side-container'>
					<div className = 'catalog-container desktop-container'>
						<i className = 'icon-desktop'></i>
						<text>{name}</text>
					</div>
					<div className = 'catalog-container idle-bulding-container'>
						<text className = {status == 'idle'?'idle':'building'}>{status}</text>
					</div>
					<div className = 'catalog-container info-container'>
						<i className = 'icon-info'></i>
						<text>{ip}</text>
					</div>
					<div className = 'catalog-container folder-container'>
						<i className = 'icon-folder'></i>
						<text>{location}</text>
					</div>

					<ul className = 'ul-container'>
						<li className = 'plus-container' >
							<i className = 'icon-plus' onClick = {this._open}></i>
							<div className= 'addresourse-container' style = {{display:this.state.isshown?'block':'none'}}>
								<span className = 'description'>seperate multiple resource name with commas</span>	
								<Input style ={{marginTop:15}} value = {this.state.isclearcontent?'':this.state.inputvalue} onChange = {this._inputFun}/>
								<span className = 'icon-close' onClick = {this._close}></span>
								<span className = 'addresource'>Add Resources</span>
								<span className = 'cancle' onClick = {this._cancle}>Cancel</span>
							</div>
						</li>
						{resources.map((item,index) =>
							<li className = 'content-system-container' key = {index} >
							
								<text>{item}</text>
								<i className = 'icon-trash'></i>
							
							</li>

						)}
						
					</ul>
				</div>
				<div className = 'deny-container'>
					<i className = 'icon-deny'></i>
					<text>Deny</text>
				</div>
			</div>


		)
	}
}

export default Catalog