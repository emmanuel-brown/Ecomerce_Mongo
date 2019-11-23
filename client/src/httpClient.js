import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = httpClient.getToken()
	if(token) return jwtDecode(token)
	return null
}

httpClient.logIn = function(credentials) {	
	return httpClient({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				httpClient.defaults.headers.common.token = httpClient.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// SignUp function - if someone attempts to signup a second time, will return false
httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				console.log(`signup`)
				console.log(this.defaults)
				httpClient.defaults.headers.common.token = httpClient.setToken(token)
				console.log(this.defaults)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete httpClient.defaults.headers.common.token
	return true
}

// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient