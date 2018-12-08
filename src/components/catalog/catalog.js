import React, {Component} from 'react';
import {Input} from 'antd';
import './catalog.scss';
import centos from '../../assets/cent_os.png';
import suse from '../../assets/suse.png';
import windows from '../../assets/windows.png';
import ubuntu from '../../assets/ubuntu.png';
import debian from '../../assets/debin.png';
import fetch from '../../services/fetch.js';
import { getAgentList } from '../../config/api.js';
import { _sortInputValue } from '../../utils/utils.js';
import {observer, inject} from 'mobx-react';





const imgSrc = {
	'debian':debian,
	'centos':centos,
	'suse':suse,
	'windows':windows,
	'ubuntu':ubuntu,
}

@inject('store')@observer
class Catalog extends Component {

	constructor(props){
		super(props)
		// console.log(this.props.rawData)
		this.state = {
			isshown:false,
			isclearcontent:false,
			inputvalue:'',
			rawData: this.props.rawData,
		}


	}
	// componentDidMount(){
	// 	let that = this
	// 	this.setState({
	// 		rawData:that.props.rawData
	// 	})
	// }

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
	_addResource = (e) =>{
		let that = this 
		let addValue = _sortInputValue(this.state.inputvalue)
		let { name, location, os, ip, resources, status, type, id} = this.props.rawData;
		let body ={
				"name": name,
		        "os": os,
				"status": status,
				"type": type,
				"ip": ip,
				"location": location,
				"resources": resources.concat(addValue),
				id:id
		}

		console.log(body)
		fetch.put(`${getAgentList}/${id}`,body).then((res)=>{
			this.setState({
				inputvalue:'',
			})
			that.props.store.loadingSpin();
			that.props.store.initData();
		})
	}


	_deleteOneAgent = (e)=> {
		let id = e.target.getAttribute('datakey')
		let that = this

		console.log(`${getAgentList}/${id}`)

		fetch.delete(`${getAgentList}/${id}`).then((res)=>{
			//删除完需要触发重新渲染
			that.props.store.loadingSpin();
			that.props.store.initData();
		})

	}

	_deleteResource = (e)=> {
		let that = this
		let currentIndex = e.target.getAttribute('datakey')
		console.log(currentIndex)
		let { name, location, os, ip, resources, status, type, id} = this.props.rawData;
		let body ={
				"name": name,
		        "os": os,
				"status": status,
				"type": type,
				"ip": ip,
				"location": location,
				"resources": resources.filter((item,index)=>parseInt(index)!==parseInt(currentIndex)),
				id:id
		}

		console.log(resources.filter((item,index)=>parseInt(index)!==parseInt(currentIndex)))
		fetch.put(`${getAgentList}/${id}`,body).then((res)=>{
			that.props.store.loadingSpin();
			that.props.store.initData();
		})
	}
	render () {
		let { name, location, os, ip, resources, status, id} = this.props.rawData;

		let imgpath = ''
		for (let key in imgSrc){
			if(os === key){
				imgpath =imgSrc[key]
			}
		}

		return (

			<div className = {`${this.props.type} content-container`}>

				<div className = 'img-container'>	
				 	<img src = {imgpath} alt = ''/>
				</div>

				<div className = 'right-side-container'>
					<div className = 'catalog-container desktop-container'>
						<i className = 'icon-desktop'></i>
						<em>{name}</em>
					</div>
					<div className = 'catalog-container idle-bulding-container'>
						<em className = {status === 'idle'?'idle':'building'}>{status}</em>
					</div>
					<div className = 'catalog-container info-container'>
						<i className = 'icon-info'></i>
						<em>{ip}</em>
					</div>
					<div className = 'catalog-container folder-container'>
						<i className = 'icon-folder'></i>
						<em>{location}</em>
					</div>

					<ul className = 'ul-container'>
						<li className = 'plus-container' >
							<i className = 'icon-plus' onClick = {this._open}></i>
							<div className= 'addresourse-container' style = {{display:this.state.isshown?'block':'none'}}>
								<span className = 'description'>seperate multiple resource name with commas</span>	
								<Input style ={{marginTop:15}} value = {this.state.isclearcontent?'':this.state.inputvalue} onChange = {this._inputFun}/>
								<span className = 'icon-close' onClick = {this._close}></span>
								<span className = 'addresource' onClick = {this._addResource}>Add Resources</span>
								<span className = 'cancle' onClick = {this._cancle}>Cancel</span>
							</div>
						</li>
						{!resources?"":resources.map((item,index) =>
							<li className = 'content-system-container' key = {index} >
							
								<em>{item}</em>
								<i className = 'icon-trash' onClick = {this._deleteResource} datakey = {index}></i>
							
							</li>

						)}
						
					</ul>
				</div>
				<div className = 'deny-container'  datakey={id} onClick ={this._deleteOneAgent}>
					<i className = 'icon-deny' datakey={id} ></i>
					<em datakey={id} >Deny</em>
				</div>
			</div>


		)
	}
}

export default Catalog