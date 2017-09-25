import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login, logout} from '../store/actions'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}	

		this.login = this.login.bind(this)
		this.logout = this.logout.bind(this)
	}

	login() {
		this.props.login({
			username: this.state.username,
			password: this.state.password
		})
	}

	logout() {
		this.props.logout()
	}

	render() {
		return (
			<div>
				<input 
					name="username"
					value={this.state.username} 
					onChange={
						(e) => this.setState({username: e.target.value})
					}
				/>

				<input 
					name="password"
					value={this.state.password} 
					onChange={
						(e) => this.setState({password: e.target.value})
					}
				/>

				<button onClick={this.login}>Login</button>
				<button onClick={this.logout}>Logout</button>
			</div>
		)
	}
}

export default connect(undefined, { login, logout })(Login)
