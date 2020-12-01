import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-65dcf.firebaseio.com/',
});
export default instance;
