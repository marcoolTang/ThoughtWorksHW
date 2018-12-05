import React, {Component} from 'react';
import {
	Link, 
	Route,
} from 'react-router-dom';

class Topic extends Component {

	constructor (props) {
		super(props)
		console.log("构造器",this.props.match)
	}

	render () {
		let match = this.props.match
		console.log('渲染函数',this.props.match)
		return (

		    <div>
    			<h3>{match.params.topicId}</h3>
  			</div>

		)
	}
}

export default Topic