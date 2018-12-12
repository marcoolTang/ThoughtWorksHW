import React, {Component} from 'react';
import { Row, Col, Spin } from 'antd';
import Catalog from '../catalog/catalog.js';
// import request from '../../services/fetch.js';
// import {getAgentList} from '../../config/api.js';
import {_getType,_getStatus} from '../../utils/utils.js';
import {observer, inject,} from 'mobx-react';
import Texty from 'rc-texty';

import gear from '../../assets/gear.png'
import './agent.scss';


@inject('store')@observer
class Agent extends Component {
	// @observable data

	constructor(props){
		super(props)
		this.state = {
			rawData: [],
			types:{},
			status:{},
			toggle:'',
		}
	}
	componentDidMount(){
		this.props.store.initData()
		// request.get(getAgentList).then((res)=>{
		// 	let resJson = JSON.parse(res)
		// 	//console.log(resJson)

		// 	let types = _getType(resJson)
		// 	let status = _getStatus(resJson)

		// 	this.setState({
		// 		rawData:resJson,
		// 		types:types,
		// 		status:status,
				
		// 	})
		// })
	}

	//下面三个函数用来控制分类 用一个toggle来切换，当item不为toggle切toggle不为空一个隐藏属性
	//这里就用setState来操作了
	_allType = (e)=>{
		this.setState({
			toggle:'',
			
		})
	}
	_physicalType = (e)=> {
		this.setState({
			toggle:"physical",
		})
	}
	_virtualType = (e)=>{
		this.setState({
			toggle:"virtual",
		})
	}

	render () {
		// let {rawData,types,status} = this.state
		let expectedData = {}
		//处理store里的stringifyData,在store里处理返回来的是个Proxy对象,不好处理
		// console.log(this.props.store.parseData)
		let parseData = this.props.store.parseData
		let { state } = this.props.store
		expectedData = {
				rawData:parseData,
				types:_getType(parseData),
				status:_getStatus(parseData),
			}
		let {rawData,types,status} = expectedData
		console.log(types)
		// console.log(expectedData,typeof state)
		return (
			<div>
				<div className="gutter-example">
				    <Row gutter={16}>
						<Col className="gutter-row " span={8}>
							<div className="gutter-box building-container">
								<img className = 'gear-rotate' src = {gear} alt ='' />
								<Texty className = 'status-name'>Building</Texty>
								<span className = 'status-number'>{status?status.building:''}</span>
							</div>
						</Col>
						<Col className="gutter-row " span={8}>
							<div className="gutter-box idle-container">
								<Texty className = 'status-name'>Idle</Texty>
								<span className = 'status-number'>{status?status.idle:''}</span>
							</div>
						</Col>
						<Col className="gutter-row" span={8}>
							<div className="gutter-box">
								<ul className = 'type-container'>
									<li>
										<Texty className = 'type-name'>All</Texty>
										<span className = 'type-number'>{types?types.all:''}</span>
									</li>
									<li>
										<Texty className = 'type-name'>Physical</Texty>
										<span className = 'type-number'>{types?types.physical:''}</span>
									</li>
									<li>
										<Texty className = 'type-name'>Virtual</Texty>
										<span className = 'type-number'>{types?types.virtual:''}</span>
									</li>
								</ul>
							</div>
						</Col>
				    </Row>
				</div>
				<div className = 'catagory'>
					<ul className ='search-list'>
						<li onClick = {this._allType} >All</li>
						<li onClick = {this._physicalType} >Physical</li>
						<li onClick = {this._virtualType} >Virtual</li>
					</ul>
				</div>
				<Spin  size="large" spinning = {state} />
				<div className = 'loading-container'>
					<div className = {state?'loading-background':'s'} ></div>
																								{/** 这里就用setState来操作了用来控制all,physical,vitual**/}	      
					{rawData?rawData.map((item,index) => <Catalog key ={index} rawData = {item} type = {item.type!==this.state.toggle&&this.state.toggle!==''?'hide':'block'}/>):''}
				</div>
			</div>

		)
	}
}

export default Agent