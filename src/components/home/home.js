import React, { Component } from 'react';
import { Layout, Menu, Icon, Badge, Dropdown, Avatar  } from 'antd';
import { Route, Link, Switch} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard'; // 导入Dashoard组件
import Agent from '../agent/agent'; // 导入Agent组件
import Help from '../help/help'; // 导入Help组件
import Mycuirse from '../mycuirse/mycuirse'; // 导入Mycuirse组件
// import Topics from '../topics/topics'; // 导入Inbox组件

import './fonts.css';
import './home.scss';

const { Header, Content, Sider } = Layout;

const LogoSVG = () => (
		<svg className = 'logo-container' width="96px" length="auto" viewBox="0 0 315 106" version="1.1" height = '33px'>
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="evenodd">
		        <g id="logo">
		            <g id="Group" transform="translate(59.520000, 30.304688)" fill="#2D4054">
		                <path d="M15.208,33.5345728 L23.56,33.5345728 C26.152013,33.5345728 28.2159923,33.2791495 29.752,32.7682953 C31.2880077,32.2574411 32.4639959,31.5252277 33.28,30.5716332 C34.0960041,29.6180387 34.6479986,28.4430917 34.936,27.0467568 C35.2240014,25.650422 35.368,24.0327413 35.368,22.1936662 C35.368,20.354591 35.2240014,18.7369103 34.936,17.3405755 C34.6479986,15.9442406 34.0480046,14.7522654 33.136,13.7646139 C32.2239954,12.7769625 30.9520082,12.0447491 29.32,11.5679518 C27.6879918,11.0911546 25.5280134,10.8527595 22.84,10.8527595 L15.208,10.8527595 L15.208,33.5345728 Z M0.52,1.04440782 L24.136,1.04440782 C41.4160864,1.04440782 50.056,8.16220297 50.056,22.3980068 C50.056,26.6210682 49.1200094,30.2480787 47.248,33.279147 C45.3759906,36.3102153 42.0880235,38.7452504 37.384,40.5843256 L53.224,73.7896829 L37.672,73.7896829 L23.992,42.7299025 L15.208,42.7299025 L15.208,73.7896829 L0.52,73.7896829 L0.52,1.04440782 Z M109.384,57.44243 C109.384,59.8264163 108.760006,62.0400847 107.512,64.0835015 C106.263994,66.1269183 104.560011,67.9148812 102.4,69.4474438 C100.239989,70.9800064 97.7200144,72.1890099 94.84,73.0744905 C91.9599856,73.9599712 88.8880163,74.4027048 85.624,74.4027048 C82.3599837,74.4027048 79.2880144,73.9599712 76.408,73.0744905 C73.5279856,72.1890099 71.0080108,70.9800064 68.848,69.4474438 C66.6879892,67.9148812 64.9840062,66.1269183 63.736,64.0835015 C62.4879938,62.0400847 61.864,59.8264163 61.864,57.44243 L61.864,1.04440782 L76.552,1.04440782 L76.552,56.4207267 C76.552,59.0090547 77.4159914,60.9162151 79.144,62.1422652 C80.8720086,63.3683153 83.031987,63.9813312 85.624,63.9813312 C88.216013,63.9813312 90.3759914,63.3683153 92.104,62.1422652 C93.8320086,60.9162151 94.696,59.0090547 94.696,56.4207267 L94.696,1.04440782 L109.384,1.04440782 L109.384,57.44243 Z M200.104,21.9893255 L185.416,21.9893255 L185.416,19.6394079 C185.416,17.2554216 184.624008,15.1950072 183.04,13.4581029 C181.455992,11.7211986 178.792019,10.8527595 175.048,10.8527595 C173.03199,10.8527595 171.376006,11.125211 170.08,11.6701222 C168.783994,12.2150333 167.776004,12.9131902 167.056,13.7646139 C166.335996,14.6160376 165.832001,15.6036742 165.544,16.7275535 C165.255999,17.8514327 165.112,19.0263798 165.112,20.2524299 C165.112,21.6828217 165.183999,22.8918251 165.328,23.8794766 C165.472001,24.8671281 165.831997,25.718539 166.408,26.4337349 C166.984003,27.1489307 167.823994,27.7789748 168.928,28.323886 C170.032006,28.8687971 171.54399,29.4137001 173.464,29.9586112 L184.696,33.1258915 C187.960016,34.0113721 190.59999,35.0500934 192.616,36.2420865 C194.63201,37.4340797 196.191994,38.8303936 197.296,40.4310701 C198.400006,42.0317466 199.143998,43.8707941 199.528,45.9482679 C199.912002,48.0257417 200.104,50.392664 200.104,53.0491058 C200.104,56.1142311 199.672004,58.9579435 198.808,61.5803284 C197.943996,64.2027133 196.52801,66.4504381 194.56,68.3235702 C192.59199,70.1967023 189.976016,71.6781573 186.712,72.7679796 C183.447984,73.8578019 179.464024,74.4027048 174.76,74.4027048 C171.207982,74.4027048 167.896015,73.9599712 164.824,73.0744905 C161.751985,72.1890099 159.112011,70.9800064 156.904,69.4474438 C154.695989,67.9148812 152.944006,66.0928619 151.648,63.9813312 C150.351994,61.8698005 149.704,59.5880192 149.704,57.135919 L149.704,53.2534465 L164.392,53.2534465 L164.392,56.5228971 C164.392,58.4300861 165.183992,60.1499361 166.768,61.6824987 C168.352008,63.2150614 171.015981,63.9813312 174.76,63.9813312 C177.256012,63.9813312 179.199993,63.7259079 180.592,63.2150537 C181.984007,62.7041995 183.039996,61.9890143 183.76,61.0694768 C184.480004,60.1499392 184.935999,59.0090486 185.128,57.6467707 C185.320001,56.2844928 185.416,54.7860096 185.416,53.1512762 C185.416,51.2440871 185.320001,49.6774911 185.128,48.451441 C184.935999,47.2253909 184.528003,46.2377543 183.904,45.4885014 C183.279997,44.7392486 182.416006,44.1262327 181.312,43.6494355 C180.207994,43.1726382 178.744009,42.6617917 176.92,42.1168805 L166.408,39.0517706 C160.071968,37.2126955 155.824011,34.7776603 153.664,31.746592 C151.503989,28.7155237 150.424,24.9182311 150.424,20.3546002 C150.424,17.6300445 150.951995,15.0417553 152.008,12.5896551 C153.064005,10.1375549 154.62399,8.0260559 156.688,6.25509465 C158.75201,4.48413341 161.367984,3.07079131 164.536,2.01502595 C167.704016,0.959260598 171.399979,0.431385838 175.624,0.431385838 C179.272018,0.431385838 182.607985,0.908175944 185.632,1.86177046 C188.656015,2.81536498 191.247989,4.07545311 193.408,5.64207267 C195.568011,7.20869224 197.223994,8.9625987 198.376,10.9038447 C199.528006,12.8450907 200.104,14.8373922 200.104,16.880809 L200.104,21.9893255 Z M211.048,1.04440782 L254.824,1.04440782 L254.824,10.8527595 L225.736,10.8527595 L225.736,32.2063585 L251.08,32.2063585 L251.08,42.0147102 L225.736,42.0147102 L225.736,63.3683092 L254.824,63.3683092 L254.824,73.7896829 L211.048,73.7896829 L211.048,1.04440782 Z" id="CRUISE"></path>
		            </g>
		            <polygon id="Path" fill="#00B4CF" points="183 1 197.688 1 197.688 103.528 183 103.528"></polygon>
		            <path d="M45.72,90.568 C44.519994,93.4480144 42.8640106,95.9679892 40.752,98.128 C38.6399894,100.288011 36.1680142,102.015994 33.336,103.312 C30.5039858,104.608006 27.4560163,105.256 24.192,105.256 C21.4079861,105.256 18.5760144,104.872004 15.696,104.104 C12.8159856,103.335996 10.2240115,102.016009 7.92,100.144 C5.61598848,98.2719906 3.72000744,95.8000154 2.232,92.728 C0.74399256,89.6559846 0,85.7680235 0,81.064 L0,24.616 C0,21.2559832 0.57599424,18.1360144 1.728,15.256 C2.88000576,12.3759856 4.51198944,9.88001056 6.624,7.768 C8.73601056,5.65598944 11.2559854,4.000006 14.184,2.8 C17.1120146,1.599994 20.3519822,1 23.904,1 C27.2640168,1 30.3839856,1.599994 33.264,2.8 C36.1440144,4.000006 38.6399894,5.6799892 40.752,7.84 C42.8640106,10.0000108 44.519994,12.5919849 45.72,15.616 C46.920006,18.6400151 47.52,21.9279822 47.52,25.48 L47.52,31.24 L32.832,31.24 L32.832,26.344 C32.832,23.4639856 32.0160082,20.9680106 30.384,18.856 C28.7519918,16.7439894 26.5440139,15.688 23.76,15.688 C20.1119818,15.688 17.688006,16.8159887 16.488,19.072 C15.287994,21.3280113 14.688,24.1839827 14.688,27.64 L14.688,80.056 C14.688,83.0320149 15.3359935,85.5279899 16.632,87.544 C17.9280065,89.5600101 20.2559832,90.568 23.616,90.568 C24.5760048,90.568 25.6079945,90.4000017 26.712,90.064 C27.8160055,89.7279983 28.8239954,89.1760038 29.736,88.408 C30.6480046,87.6399962 31.3919971,86.5840067 31.968,85.24 C32.5440029,83.8959933 32.832,82.2160101 32.832,80.2 L32.832,75.16 L47.52,75.16 C47.120004,83.5119904 46.520004,88.6479904 45.72,90.568 Z" id="Path" fill="#00B4CF"></path>
		        </g>
		    </g>
		</svg>
	)

class Home extends Component {
	constructor(props){
		super(props)
		this.state ={
			count:99,
			seletedKey:'1',
		}
	}
	componentWillMount (){
		if(!window.sessionStorage.getItem('key')){
			console.log(1)
			this.props.history.push('/')
		}
		let { pathname } = this.props.location
		console.log(pathname)
		switch (pathname){
			case '/home/dashboard':
				this.setState({
					seletedKey:'1'
				})
				break;
			case '/home/agent':
				this.setState({
					seletedKey:'2'
				})
				break;
			case '/home/mycuirse':
				this.setState({
					seletedKey:'3'
				})
				break;
			case '/home/help':
				this.setState({
					seletedKey:'4'
				})
				break;
			default:
				console.log(pathname)

		}
	}

	_logOut(){
		window.sessionStorage.removeItem('key')
		this.props.history.push('/')
	}

	render() {
		const menu = (
			<Menu style = {{display:"inline-block"}}>
				<Menu.Item key="0">
					<span className ='icon-id-card'></span>
					<span className = 'icon-id-text'>Profile</span>
				</Menu.Item>
				<Menu.Item key="1" onClick = {this._logOut.bind(this)}>
					<span className ='icon-sign-in'></span>
					<span className = 'icon-sign-text'>Logout</span>
				</Menu.Item>
				
			</Menu>
			)
		const login = (
      		<Dropdown overlay={menu} trigger={['click']}>
   	 			<a className="ant-dropdown-link" href="#">
      				<Icon type="down" />
   				 </a>
  			</Dropdown>
   			)
		const {match} = this.props
		return (
				<Layout className = 'homebackground-container'>
					<Header style = {{background:'white'}}>
						<LogoSVG />
						<div className = "avatar" style = {{width:"auto", display:"inline-block",float:'right',paddingRight:'80px' }}>
							<span onClick = {() => this.setState({count:0})} style = {{marginRight:8}}>
      							<Badge count={this.state.count}><Avatar shape="circle" icon="user" overflowcount={99} size = {40} /></Badge>
    						</span>
							{login}
						</div>
					</Header>
					<Layout style ={{width:1200,left:'50%',marginLeft:'-600px',position:'relative',height:'100%'}}>
						<Sider
						breakpoint="lg"
						collapsedWidth="0"
						onBreakpoint={(broken) => { console.log(broken); }}
						onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
						>
							
							<Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.seletedKey]}  >
								<Menu.Item key="1">
									<span className ='icon-dashboard' style ={{marginRight:10}}></span>
									<span className="nav-text">Dashboard</span>
									<Link to = {`${match.url}/dashboard`} />
								</Menu.Item>
								<Menu.Item key="2">
									<span className ='icon-sitemap' style ={{marginRight:10}}></span>
									<span className="nav-text">AGENT</span>
									<Link to = {`${match.url}/agent`} />
								</Menu.Item>
								<Menu.Item key="3">
									<span className ='icon-boat' style ={{marginRight:10}}></span>
									<span className="nav-text">MYCUIRSE</span>
									<Link to = {`${match.url}/mycuirse`} />
								</Menu.Item>
								<Menu.Item key="4">
									<span className ='icon-life-bouy' style ={{marginRight:10}}></span>
									<span className="nav-text">HELP</span>
									<Link to = {`${match.url}/help`} />
								</Menu.Item>
							</Menu>
						</Sider>
					    <Content style={{ margin: '24px 16px 0',background:'#E1E4E6' }}>
			    			<div style={{ padding: 24,minHeight: 360 }}>

			    				<Switch>
			    					<Route exact path ={`${match.url}`} render = {()=>'Welcome to Home Page'}></Route>
				      				<Route path ={`${match.url}/dashboard`} component = {Dashboard}></Route>
				      				<Route path ={`${match.url}/agent`} component = {Agent}></Route>
				      				<Route path ={`${match.url}/mycuirse`} component = {Mycuirse}></Route>
				      				<Route path ={`${match.url}/help`} component = {Help}></Route>
			      				</Switch>
			    			</div>
			  			</Content>
			  			
					</Layout>
				</Layout>

			);
	
		}
	}	
export default Home;