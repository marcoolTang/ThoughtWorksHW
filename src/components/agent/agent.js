import React, {Component} from 'react';
import { Row, Col } from 'antd';
import Catalog from '../catalog/catalog.js';
import request from '../../services/fetch.js';
import {getAgentList} from '../../config/api.js';
import {_getType,_getStatus} from '../../utils/utils.js';

import './agent.scss';

class Agent extends Component {

	constructor(props){
		super(props)
		this.state = {
			rawData: [],
			types:{},
			status:{},
		}
	}


	componentDidMount(){
		request.get(getAgentList).then((res)=>{
			let resJson = JSON.parse(res)
			//console.log(resJson)

			let types = _getType(resJson)
			let status = _getStatus(resJson)

			this.setState({
				rawData:resJson,
				types:types,
				status:status,
			})
		})
	}

	render () {
		let {rawData,types,status} = this.state
		return (
			<div>
				<div className="gutter-example">
				    <Row gutter={16}>
						<Col className="gutter-row" span={8}>
							<div className="gutter-box">
								<span className = 'status-name'>builing</span>
								<span className = 'status-number'>{status.building}</span>
							</div>
						</Col>
						<Col className="gutter-row" span={8}>
							<div className="gutter-box">
								<span className = 'status-name'>Idle</span>
								<span className = 'status-number'>{status.idle}</span>
							</div>
						</Col>
						<Col className="gutter-row" span={8}>
							<div className="gutter-box">
								<ul className = 'type-container'>
									<li>
										<span className = 'type-name'>All</span>
										<span className = 'type-number'>{types.all}</span>
									</li>
									<li>
										<span className = 'type-name'>Physical</span>
										<span className = 'type-number'>{types.physical}</span>
									</li>
									<li>
										<span className = 'type-name'>Virtual</span>
										<span className = 'type-number'>{types.virtual}</span>
									</li>
								</ul>
							</div>
						</Col>
				    </Row>
				</div>
				<div className = 'catagory'>
					<ul className ='search-list'>
						<li>All</li>
						<li>Physical</li>
						<li>Physical</li>
					</ul>
				</div>

				{rawData.map((item,index) => <Catalog key ={index} rawData = {item}/>)}

			</div>

		)
	}
}

export default Agent